import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./core/form.component";
import { TableComponent } from "./core/table.Component";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { ModelResolver } from "./model/model.resolver";
import { TermsGuard } from "./terms.guard";
import { UnsavedGuard } from "./core/unsaved.guard";

const childRoutes: Routes = [
    {
        path:"",
        //守卫子路由，再激活任何子路由之前，都会调用这个方法
        canActivateChild:[TermsGuard],
       children: [{path:"products", component: ProductCountComponent},
                  {path:"categories", component:CategoryCountComponent},
                  {path:"", component:ProductCountComponent}],
        resolve:{ model:ModelResolver}
    }
]

const routes: Routes = [
    {
        path: "ondemand",
        //loadChildren可以用来为Angular提供如何加载模块的详细信息
        //app/ondemand/ondemand.module#OndemandModule表示从app/ondemand/ondemand.module.js文件加载OndemandModule类
        loadChildren:"app/ondemand/ondemand.module#OndemandModule"
    },
    {
        path:"form/:mode/:id", component: FormComponent, 
        //在修改页面加resolve，防止在修改页面点刷新以后，产品信息消失
        //加了resolve就会显示loading
        resolve:{model:ModelResolver},
        canDeactivate:[UnsavedGuard]
        
    },
    {
        path:"form/:mode", component: FormComponent, 
        resolve:{model:ModelResolver},
        canActivate:[TermsGuard]
    },
    {path:"table",component:TableComponent,children:childRoutes},
    {path:"table/:category", component: TableComponent, children:childRoutes},
    {path:"", redirectTo: "/table", pathMatch:"full"},
    {path:"**", component:NotFoundComponent}
]
export const routing = RouterModule.forRoot(routes);