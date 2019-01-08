import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Model } from "./repository.model"
import { RestDataSource } from "./rest.datasource";
import { Product } from "./product.model";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
//解析器用于推迟导航，以便于程序执行某些必须完成的预备工作，比如通过API加载数据
@Injectable()
export class ModelResolver {

    constructor(
        private model: Model,
        private dataSource: RestDataSource,
        private messages: MessageService
        ) { }

        //ActivatedRouteSnapshot对象描述正在导航的路由
        //RouterStateSnapshot对象描述当前路由
        //resolve方法会检测模型中的对象数量，判断restful的web服务请求是否完成，如果模型中不存在对象，resolve方法就从RestDataSource返回Observable
        //getData方法在http请求结束后可以产生一个事件，Angular订阅Observable然后推迟激活新的路由，直到Observable产生一个事件
        //如果模型中存在对象，则返回null，Angular会立即激活路由
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Product[]> {
            // return this.model.getProducts().length == 0? this.dataSource.getData() :null;
        if (this.model.getProducts().length == 0) {
            this.messages.reportMessage(new Message("Loading data..."));
            return this.dataSource.getData();
        }
    }
}
