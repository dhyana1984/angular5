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
        this.count = this.model.getProducts().filter(t => this.category==null || t.category == this.category).length;
    }
}