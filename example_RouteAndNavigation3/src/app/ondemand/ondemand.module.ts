import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OndemandComponent } from "./ondemand.component";
import { RouterModule } from "@angular/router";
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";
//RouterModule.forChild用于在应用程序根模块中设置路由，
//创建动态模块时，必须使用RouterModule.forChild，当模块加载时，这个路由配置可以合并到总的路由系统
let routing = RouterModule.forChild([
    {
        path:"",
        component:OndemandComponent,
        children:[
            //不带name的router-outlet默认name=primary，也就是主出口
            //为每个出口配置路由
            {outlet:"primary", path:"", component:FirstComponent},
            {outlet:"left", path:"", component:SecondComponent},
            {outlet:"right", path:"", component:SecondComponent}
        ]
    },
    {
        path:"swap",
        component:OndemandComponent,
        children:[
            {outlet:"primary", path:"", component:SecondComponent},
            {outlet:"left", path:"", component:FirstComponent},
            {outlet:"right", path:"", component:FirstComponent}
        ]
    }
]);
@NgModule({
    //导入CommonModule替换BrowserModule功能，以访问按需求加载的功能模块中的内建指令
    imports:[CommonModule,routing],
    declarations:[OndemandComponent,FirstComponent,SecondComponent],
    exports:[OndemandComponent]
})
export class OndemandModule{

}