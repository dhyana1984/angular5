import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component"
import {AdminComponent} from "./admin.component"
import {AuthGuard} from "./auth.guard";

let routing = RouterModule.forChild([
    {path: "auth",component: AuthComponent},
    {path: "main", component:AdminComponent, canActivate:[AuthGuard]}, //守卫路由的方法必须是canActivate
    {path: "**",redirectTo:"auth"}
]);

@NgModule({
    imports:[CommonModule,FormsModule,routing],
    providers: [AuthGuard],
    declarations:[AuthComponent, AdminComponent]
})
export class AdminModule{

}