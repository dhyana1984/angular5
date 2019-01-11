import { Component, HostListener, Output, EventEmitter, Input } from "@angular/core";
import { Model } from "app/model/repository.model";
import { Product } from "app/model/product.model";

//这个组件用一个内联模板来显示一条消息，用于提示路由系统选中了哪个组件
@Component({
    selector:"first",
    moduleId:module.id,
    templateUrl:"first.component.html"
})
export class FirstComponent{
    constructor(private repository:Model){

    }
    category: string = "Soccer";
    highlighted: boolean = false;
    @Output("pa-highlight")
    change= new EventEmitter<boolean>();

    @Input("pa-model")
    model:Model;
    getProducts():Product[]{
        // return this.repository.getProducts().filter(t => t.category==this.category)
        return this.model == null? [] : this.model.getProducts().filter(t => t.category == this.category);
    }

    //组件的mouseenter和mouseleave事件
    @HostListener("mouseenter",["$event.type"])
    @HostListener("mouseleave",["$event.type"])
    setHightlight(type:string){
        this.highlighted = type=="mouseenter";
        this.change.emit(this.highlighted);
    }

}