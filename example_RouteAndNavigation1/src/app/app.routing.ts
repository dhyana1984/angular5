import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./core/form.component";
import { TableComponent } from "./core/table.Component";

//定义路由，这是URL和向用户显示的组件之间的映射，定义在app文件夹的app.routing.ts中 
const routes: Routes = [
    //合并路由，:mode是路由参数，可以匹配任意存在两个段并且第一个段为form的URL
    //:id是为了编辑时将产品id传到form
    {path:"form/:mode/:id", component: FormComponent},
    //注意，上面加了带id的路由，这里必须要补一个不带id的，以便/form/create能正常工作
    {path:"form/:mode", component: FormComponent},
    {path:"", component: TableComponent},
]
export const routing = RouterModule.forRoot(routes);