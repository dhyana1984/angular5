import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "app/model/repository.model";

@Component({
    selector:"paProductCount",
    template:"<div class='bg-info p-a-1'>There are {{count}} products</div>"
})
export class ProductCountComponent{
    private differ:KeyValueDiffer<any,any>;
    count: number =0;
    constructor(private model: Model,
                private keyValueDiffers:KeyValueDiffers){

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
        this.count = this.model.getProducts().length;
    }
}