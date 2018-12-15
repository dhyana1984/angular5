import {Component,ApplicationRef} from "@angular/core"
import {Model} from "./repository.model"
import {Product} from "./product.model";

@Component({
    selector:"app",
    templateUrl:"app/template.html"
})
export class ProductComponent{
    model: Model = new Model();

    constructor(ref:ApplicationRef){
       // <any>window 全局变量
        (<any>window).appRef=ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position:number) :Product{
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position:number):string{
        let product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price <50 ? "bg-info" : "bg-warning");
    }

    getClasses(key: number):string {
        let product = this.model.getProduct(key);
        // return this.model.getProducts().length ==5 ?"bg-success":"bg-warning";
        return "p-a-1 " + (product.price <50? "bg-info" : "bg-warning")
    }

    //class绑定映射
    getClassMap(key:number):Object {
        let product = this.model.getProduct(key);
        return {
            "text-xs-center bg-danger" : product.name =="Kayak",
            "bg-info" : product.price<50
        };
    }

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string ="30";

    getStyles(key : number){
        let product = this.model.getProduct(key);

        //可以是js的属性名称格式也可以是css的属性名称格式
        return {
            fontSize :"30px", 
            "margin.px":100,
            color:product.price>50?"red":"green"
        }
    }
}