import { Injectable, ErrorHandler, NgZone } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Injectable()
export class MessageErrorHandler implements ErrorHandler{
    constructor(private messageService:MessageService,private ngZone: NgZone){

    }
    handleError(error){
        
        let msg = error instanceof Error ? error.message : error.toString();
        //ngZone.run是让Angular跟踪变化
        this.ngZone.run(() => this.messageService.reportMessage(new Message(msg,true)),0)
        
    }
    
}