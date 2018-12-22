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

     @ViewChildren(PaCellColor)
     viewChildren: QueryList<PaCellColor>;

     ngAfterViewInit() {
         this.viewChildren.changes.subscribe(() => {
             this.updateViewChildren();
         });
         this.updateViewChildren();
     }

     private updateViewChildren() {
         setTimeout(() => {
             this.viewChildren.forEach((child, index) => {
                 child.setColor(index % 2 ? true : false);
             })
         }, 0);
     }

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

}