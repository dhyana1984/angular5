import {Injectable} from "@angular/core";
import {Message} from "./message.model";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
@Injectable()
export class MessageService{
    private subject = new Subject<Message>();
    // private handler: (m: Message) => void;
    reportMessage(msg:Message){
        // if(this.handler != null){
        //     this.handler(msg);
        // }
        this.subject.next(msg);
    }
    // registerMessageHandler(handler:(m:Message)=>void){
    //     this.handler = handler;
    // }
    get messages(): Observable<Message>{
        return this.subject;
    }
}