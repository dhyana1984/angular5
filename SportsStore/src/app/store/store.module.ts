import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from "./counter.directive";
import {cartsSummaryComponent} from "./cartSummary.component";

@NgModule({
    imports:[ModelModule,BrowserModule,FormsModule],
    declarations:[StoreComponent,CounterDirective,cartsSummaryComponent], //自定义模块需要在declaration中加载
    exports:[StoreComponent]
})
export class StoreModule{
    
}