import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {StoreComponent} from "./store/store.component";
import{CartDetailComponent} from "./store/cartDetail.component";
import{CheckoutComponent} from "./store/checkout.component";
import {RouterModule} from "@angular/router";
import {StoreFirstGuard} from "./storeFirst.guard"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StoreModule,
    //手工配置路由，每条路由映射到一个组件,通过守卫路由守卫每一个路由
    RouterModule.forRoot([
      {   
        path:"store",component:StoreComponent,
        canActivate:[StoreFirstGuard]
      },

      {
        path:"cart",component:CartDetailComponent,
        canActivate:[StoreFirstGuard]
      },

      {
        path:"checkout",component:CheckoutComponent,
        canActivate:[StoreFirstGuard]
      },
      {
        path:"admin",
        //当导航到/admin时，应该从/app/admin/admin.module.ts文件加载由名为AdminModule的类定义的功能模块
        loadChildren:"app/admin/admin.module#AdminModule", 
        canActivate:[StoreFirstGuard]
      },
      {
        path:"**",redirectTo:"/store",
        canActivate:[StoreFirstGuard]
      }//通配符，将任何其他URL重定向到/store,显示StoreComponent
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
