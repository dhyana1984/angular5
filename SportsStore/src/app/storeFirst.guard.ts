import { NgModule, Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {StoreComponent} from "./store/store.component";

@Injectable()
export class StoreFirstGuard{
    private firstNavigation = true;
    constructor(private router:Router){

    }
    //canActivate方法通过路由上下文来判断导航起点，如果不是从/store开始，重载页面就跳回/store
    canActivate(route:ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean{
        if(this.firstNavigation){
            this.firstNavigation =false;
            if(route.component != StoreComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}