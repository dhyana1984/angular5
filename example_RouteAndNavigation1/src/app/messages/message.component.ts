import { Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {Observable} from "rxjs/observable"
import "rxjs/add/operator/filter";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
@Component({
    selector:"paMessages",
    moduleId:module.id,
    templateUrl:"message.component.html"
})
export class MessageComponent{
    lastMessage: Message;
    constructor(messageService:MessageService,router:Router){
        messageService.messages.subscribe(m=> this.lastMessage=m);
        //当导航完成或者取消时，将消息内容清空，以避免导航后消息带到新页面
        router.events.filter(e => e instanceof NavigationEnd||e instanceof NavigationCancel)
                     .subscribe(e => {this.lastMessage,this.lastMessage= null;});

    }
}