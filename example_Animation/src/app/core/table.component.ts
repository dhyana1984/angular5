import {Component, AnimationTransitionEvent} from "@angular/core";
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
import { ActivatedRoute } from "@angular/router";
import {HighlightTrigger} from "./table.animations"
@Component({
    selector:"paTable",
    moduleId:module.id,
    templateUrl:"table.component.html",
    //可以用内联方式定义动画，但是这样做会使动画变得非常复杂，所以用一个单独文件并从这个文件导出一个常数值
    animations:[HighlightTrigger] 
})
export class TableComponent{
    category: string = null;
     constructor(private datamodel:Model, activeRoute:ActivatedRoute){
         activeRoute.params.subscribe(params => {
             this.category = params["category"] || null;
         })

    }
    //这个属性可以生成用于过滤的类别集合
    get categories():string[]{
        return this.datamodel.getProducts()
                             .map(t => t.category)
                             .filter( (category, index,array) => array.indexOf(category) == index);
    }
    getProduct(key:number):Product{
        return this.datamodel.getProduct(key);
    }
    getProducts():Product[]{
        return this.datamodel.getProducts().filter(t => this.category== null || t.category == this.category);
    }
    deleteProduct(key:number){
        this.datamodel.deleteProduct(key);
    }
    highlightCategory: string ="";
    //获取highlightCategory的绑定值，并返回
    getRowState(category:string): string{
        return this.highlightCategory=="" ?"" : this.highlightCategory== category?"selected":"notselected";
    }
    //是触发器应用于元素的指令，这个指令可以发送与元素执行的动画有关的事件
    //fromState时这个元素正退出的状态
    //toState是元素正进入的状态
    //totalTime是持续事件
    writeAnimationEvent(event:AnimationTransitionEvent, name:string,start:boolean){
        console.log("Animation "
                                + name + " "
                                + (start? 'Start':'Done')
                                +" from: "
                                + event.fromState
                                +" to:" 
                                + event.toState
                                +" time: "
                                +event.totalTime)
    }
        )

}