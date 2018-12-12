import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component"
import {AdminComponent} from "./admin.component"
import {AuthGuard} from "./auth.guard";
import {ProductTableComponent} from "./productTable.component"
import {ProductEditorComponent} from "./productEditor.component"
import {OrderTableComponent} from "./orderTable.component"

let routing = RouterModule.forChild([
    {   path: "auth",component: AuthComponent   },
    {
        path: "main", component:AdminComponent, canActivate:[AuthGuard],//守卫路由的方法必须是canActivate
        children:[
            {   path:"products/:mode/:id",component: ProductEditorComponent    },
            {   path:"products/:mode",component: ProductEditorComponent    },
            {   path:"products",component: ProductTableComponent    },
            {   path:"orders",component: OrderTableComponent    },
            {   path: "**",redirectTo:"products"    }
        ]
    }, 
   { path: "**", redirectTo:"auth"}
]);

@NgModule({
    imports:[CommonModule,FormsModule,routing],
    providers: [AuthGuard],
    declarations:[AuthComponent, AdminComponent,ProductEditorComponent, ProductTableComponent,OrderTableComponent]
})
export class AdminModule{

}