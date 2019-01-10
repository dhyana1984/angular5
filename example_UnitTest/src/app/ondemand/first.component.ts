import { Component } from "@angular/core";
import { Model } from "app/model/repository.model";
import { Product } from "app/model/product.model";

//这个组件用一个内联模板来显示一条消息，用于提示路由系统选中了哪个组件
@Component({
    selector:"first",
    template:`<div class="bg-primary p-a-1">
                There are <span class="strong">{{getProducts().length}}</span> products
              </div>`
})
export class FirstComponent{
    constructor(private repository:Model){

    }
    category: string = "Soccer";
    getProducts():Product[]{
        return this.repository.getProducts().filter(t => t.category==this.category)
    }

}