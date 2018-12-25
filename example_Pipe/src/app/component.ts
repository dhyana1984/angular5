import {Component,ApplicationRef} from "@angular/core"
import {Model} from "./repository.model"
import {Product} from "./product.model";

@Component({
    selector:"app",
    templateUrl:"template.html",
    // 某些样式是不会继承的，例如border，用/deep/或者>>的目的是将样式推入子组件的模板
    // styles:["/deep/ div {border:2px black solid; font-style:italic}"]
})
export class ProductComponent{
    //根组件只提供应用程序入口，并且用于访问应用程序数据模型，并将其提供绑定，子组件承担其他职责
    model: Model = new Model();
    
    addProduct(p:Product){
        this.model.saveProduct(p);
    }
 

}