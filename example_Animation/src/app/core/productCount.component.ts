import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "app/model/repository.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"paProductCount",
    template:"<div class='bg-info p-a-1'>There are {{count}} products</div>"
})
export class ProductCountComponent{
    private differ:KeyValueDiffer<any,any>;
    count: number =0;
    private category: string;
    constructor(private model: Model,
                private keyValueDiffers:KeyValueDiffers,
                activeRoute:ActivatedRoute){
        //activeRoute.pathFromRoot属性返回一个由ActivatedRoute对象组成的数组，这个数组代表所有用于匹配当前URL的路由
        //pathFromRoot属性可以让一个组件检查所有用于匹配URL的路由
        activeRoute.pathFromRoot.forEach(route => {
            route.params.subscribe(params => {
                if(params["category"] != null){
                    this.category = params["category"];
                    this.updateCount();
                }
            })
        })

    }

    ngOnInit(): void {
        this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
    }
    ngDoCheck(): void {
        if(this.differ.diff(this.model.getProducts()) != null){
            this.updateCount();
        }
        
    }
    private updateCount(){
        //在pathFromRoot中拿到所有有category的路由，然后根据category计算条数
        this.count = this.model.getProducts().filter(t => this.category==null || t.category == this.category).length;
    }
}