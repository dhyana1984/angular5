import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {FormsModule } from "@angular/forms"
import { ModelModule} from "../model/model.module"
import {TableComponent} from "./table.Component"
import {FormComponent} from "./form.component"
//import {SharedState,SHARED_STATE, MODES} from "./sharedState.model"
import {Subject} from "rxjs/Subject"
import {StatePipe} from "./state.pipe";
import { MessageModule } from "app/messages/message.module";
import { MessageService } from "app/messages/message.service";
import { Model } from "app/model/repository.model";
import { Message } from "app/messages/message.model";
import { RouterModule } from "@angular/router";
@NgModule({
    imports:[BrowserModule, FormsModule, ModelModule,MessageModule,RouterModule],
    declarations: [TableComponent,FormComponent,StatePipe],
    exports: [ModelModule, TableComponent, FormComponent],
    //基于值得提供程序及告诉Angular使用一个Subject<SharedState>对象来解析对SHARED_STATE令牌的依赖
    //使用路由，组件用来协同的服务不在需要
    // providers:[
    //             { 
    //                 provide: SHARED_STATE, 
    //                 deps:[MessageService,Model],
    //                 useFactory: (messageService, model) => {
    //                     return new Subject<SharedState>();
    //                     // subject.subscribe(m => messageService.reportMessage(new Message(MODES[m.mode] + 
    //                     //     (m.id != undefined ? ` ${model.getProduct(m.id).name}`:""))));
    //                     // return subject;
    //                 }
    //             }
    //           ]
})
export class CoreModule{
    
}