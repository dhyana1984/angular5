import { Component, KeyValueDiffer, KeyValueDiffers } from "@angular/core";
import { Model } from "app/model/repository.model";

@Component({
    selector:"paCategoryCount",
    template:"<div class = 'bg-primary p-a-1'>There are {{count}} categories</div>"
})
export class CategoryCountComponent{
    private differ:KeyValueDiffer<any,any>;
    count:number =0;
    constructor(private model: Model,
        private keyValueDiffers:KeyValueDiffers){

        }

        ngOnInit(): void {
            this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
        }
        ngDoCheck(): void {
            if(this.differ.diff(this.model.getProducts()) != null){
                this.count=this.model.getProducts()
                                     .map(t=> t.category)
                                     .filter((category, index, array) => array.indexOf(category)==index)
                                     .length
            }
            
        }

}