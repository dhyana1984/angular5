import { Injectable } from "@angular/core";
import { MessageService } from "./messages/message.service";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Message } from "./messages/message.model";



@Injectable()
export class TermsGuard{
    constructor(private messages:MessageService,
                private router:Router){

                }
//守卫路由，当点击Create Product时，消息会显示是否同意条件，根据回调的方法判断是否重新激活路由
    canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):Promise<Boolean> | boolean{
                  if(route.params["mode"]=="create"){
                      return  new Promise<boolean>((resolve,reject) =>{
                          let responses:  [[string, (string)=>void]]=[
                            ["Yes",()=>{resolve(true)}],
                            ["No",()=>{
                                //由于取消激活路由以后，不允许再激活路由，所以要重新导航到当前url刷新一下
                                this.router.navigateByUrl(this.router.url);
                                resolve(false);
                            }]
                          ];
                          this.messages.reportMessage(new Message("Do you accept the terms & conditions?", false,responses));
                      });
                  }else{
                      return true;
                  }
              } 
    //守卫子路由, 保护categories子路由
    canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):Promise<Boolean> | boolean{
            if(route.url.length > 0 && route.url[route.url.length - 1].path == "categories"){
                return new Promise<boolean>((resolve, reject) => {
                    let responses:  [[string, (string)=>void]]=[
                        ["Yes",()=>{resolve(true)}],
                        ["No",()=>{
                            //由于取消激活路由以后，不允许再激活路由，所以要重新导航到当前url刷新一下
                            this.router.navigateByUrl(state.url.replace("categories", "products"));
                            resolve(false);
                        }]
                      ];
                      this.messages.reportMessage(new Message("Do you want to see the categories component?", false,responses));
                });
            }else{
                return true;
            }
        }

    
}