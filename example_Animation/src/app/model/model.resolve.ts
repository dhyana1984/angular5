import { Injectable } from "@angular/core";
import { Model } from "./repository.model";
import { RestDataSource } from "./rest.datasource";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";

@Injectable()
export class ModelResolver{
    constructor(
        private model:Model,
        private dataSource: RestDataSource
    ){

    }

    //ActivatedRouteSnapshot对象描述了正在导航的路由
    //RouterStateSnapshot对象描述了当前路由
    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>{
        return this.model.getProducts().length == 0? this.dataSource.getData() : null;
    }
}