import { Injectable } from "@angular/core";
import { MessageService } from "app/messages/message.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FormComponent } from "./form.component";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Message } from "app/messages/message.model";

@Injectable()
export class UnsavedGuard{
    constructor(private messages:MessageService, private router:Router){

    }
    //路由失活守卫，主要是检测在用户放弃修改时提醒用户
    //当跳到其他页面时会触发
    canDeactivate(component:FormComponent, //要失活的组件
                  route:ActivatedRouteSnapshot,
                  state:RouterStateSnapshot): Observable<boolean> | boolean{
                      if(component.editing){
                          //检查组件中是否有未保存的数据
                          if(["name","category","price"].some(prop => component.product[prop]!=component.oringinalProduct[prop])){
                              let subject = new Subject<boolean>();
                              let responses: [[string,(string) => void]]=
                              [
                                  ["Yes", ()=>{
                                      subject.next(true);
                                      subject.complete();//这里必须调用complete方法，否则会无限期等待
                                  }],
                                  ["No", ()=>{
                                      this.router.navigateByUrl(this.router.url);
                                      subject.next(false);
                                      subject.complete();
                                  }]
                              ];
                              this.messages.reportMessage(new Message("Discard Changes?",true,responses));
                              return subject;
                          }
                      }
                      return true;
                  }
}