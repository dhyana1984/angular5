import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from "./counter.directive";
import {cartsSummaryComponent} from "./cartSummary.component";
import{CartDetailComponent} from "./cartDetail.component";
import{CheckoutComponent} from "./checkout.component";
import {RouterModule} from "@angular/router";

//在页面使用routerlink必须先在module导入RouterModule
@NgModule({
    imports:[ModelModule,BrowserModule,FormsModule,RouterModule],
    declarations:[StoreComponent,CounterDirective,cartsSummaryComponent,CartDetailComponent,CheckoutComponent], //自定义模块需要在declaration中加载
    exports:[StoreComponent,CartDetailComponent,CheckoutComponent]
})
export class StoreModule{
    
}