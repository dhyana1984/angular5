import {Component, Input,ViewChildren,QueryList} from "@angular/core";
import {Model} from "./repository.model";
import {Product} from "./product.model";
import { PaCellColor } from "./cellColor.directive";

@Component({
    selector:"paProducTable",
    templateUrl:"productTable.component.html"
})
export class ProductTableComponent{
    //这个输入属性是拿到paProducTable宿主的model属性的值并附给datamodel，
    //其实就是把父组件component.ts中的model赋给了这里的datamodel
    //宿主元素paProducTable相当于一个桥梁
    @Input("model")
    datamodel:Model
    getProduct(key:number):Product{
        return this.datamodel.getProduct(key);
    }
    getProducts():Product[]{
        return this.datamodel.getProducts();
    }
    deleteProduct(key:number){
        this.datamodel.deleteProduct(key);
    }
    showTable: boolean = true;

    dateObject: Date= new Date(2020,1,20);
    dateString:string="2020-02-20T00:00:00.0000z";
    dateNumber:number = 1582156800000;

}