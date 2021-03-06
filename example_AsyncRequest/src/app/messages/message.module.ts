import { NgModule, ErrorHandler } from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {MessageService} from "./message.service";
import { MessageComponent } from "./message.component";
import { MessageErrorHandler } from "./errorHandler";
@NgModule({
    imports:[BrowserModule],
    declarations:[MessageComponent],
    exports:[MessageComponent],
    providers:[MessageService,
        {provide:ErrorHandler, useClass:MessageErrorHandler}]
})
export class MessageModule{
    
}
