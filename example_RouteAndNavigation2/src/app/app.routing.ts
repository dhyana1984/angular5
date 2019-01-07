import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./core/form.component";
import { TableComponent } from "./core/table.Component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { CategoryCountComponent } from "./core/categoryCount.component";
//定义一个Routes对象作为子路由集合
const childRoutes: Routes = [
    {path:"products", component: ProductCountComponent},
    {path:"categories", component:CategoryCountComponent},
    {path:"", component:ProductCountComponent}
]
//定义路由，这是URL和向用户显示的组件之间的映射，定义在app文件夹的app.routing.ts中 
const routes: Routes = [
    //合并路由，:mode是路由参数，可以匹配任意存在两个段并且第一个段为form的URL
    //:id是为了编辑时将产品id传到form
    {path:"form/:mode/:id", component: FormComponent},
    //注意，上面加了带id的路由，这里必须要补一个不带id的，以便/form/create能正常工作
    {path:"form/:mode", component: FormComponent},
    //重定向URL，pathMatch设置为prefix表示可以匹配任何首段为does的url，例如/does/not/exist
    {path:"does",redirectTo:"/form/create", pathMatch:"prefix"},
    //使用childRoutes充当子路由
    {path:"table",component:TableComponent,children:childRoutes},
    // {
    //     path:"table",
    //     component: TableComponent,
    //     //子路由，由children定义，可以用一个路由数组为这个属性赋值
    //     //当Angular使用完整的URL来匹配一个拥有子路由的路由时，
    //     //只有当浏览器访问的URL所包含的某个段能够同时与顶层段和某个自路由指定的段匹配时，才算是匹配成功
    //     children: [
    //         {path:"products", component: ProductCountComponent},
    //         {path:"categories", component:CategoryCountComponent}
    //     ]
    // },
    {path:"table/:category", component: TableComponent, children:childRoutes},
    
    {path:"", redirectTo: "/table", pathMatch:"full"},
    //将通配符导航到报错组件，可以匹配任意路由，出现导航错误时就可以跳到错误页面
    {path:"**", component:NotFoundComponent}
]
export const routing = RouterModule.forRoot(routes);