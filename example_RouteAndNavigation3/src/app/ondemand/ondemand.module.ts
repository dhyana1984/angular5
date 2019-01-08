import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OndemandComponent } from "./first.component";
import { RouterModule } from "@angular/router";
//RouterModule.forChild用于在应用程序根模块中设置路由，
//创建动态模块时，必须使用RouterModule.forChild，当模块加载时，这个路由配置可以合并到总的路由系统
let routing = RouterModule.forChild([
    {path:"",component:OndemandComponent}
]);
@NgModule({
    //导入CommonModule替换BrowserModule功能，以访问按需求加载的功能模块中的内建指令
    imports:[CommonModule,routing],
    declarations:[OndemandComponent],
    exports:[OndemandComponent]
})
export class OndemandModule{

}