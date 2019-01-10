import { Injectable } from "@angular/core";
import { MessageService } from "./messages/message.service";
import { Router } from "@angular/router";
import { Message } from "./messages/message.model";

@Injectable()
export class LoadGuard{
    private loaded: boolean = false;
    constructor(private messages : MessageService,
                private router: Router){

                }
    canLoad(route:Router): Promise<boolean> | boolean{
        //当需要激活这个守卫所应用的路由时，将调用此方法，并且在调用此方法时需要为其提供一个描述了路由的Route对象
        //只有先激活了加载模块的URL时，才需要守卫，因此守卫定义了一个loaded属性当模块加载成功时，这个属性被设置为true
        //否则，返回一个Promise，当用户单击消息服务显示的一个按钮后，解析这个Promise
        return this.loaded || new Promise<boolean>((resolve, reject)=> {
            let responses:[[string, (string) => void]] =
            [
                ["Yes",() =>{
                    this.loaded = true;
                    resolve(true);
                }],
                ["No",() =>{
                    this.router.navigateByUrl(this.router.url);
                    resolve(false);
                }]
            ];
            this.messages.reportMessage(
                new Message("Do you want to load the module?", false, responses)
            )
        })
    }
}