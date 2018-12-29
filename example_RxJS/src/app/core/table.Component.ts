import {Component} from "@angular/core";
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
import {MODES,SharedState} from "./sharedState.model"

@Component({
    selector:"paTable",
    moduleId:module.id,
    templateUrl:"table.component.html"
})
export class TableComponent{
      
    constructor(private datamodel:Model,private state:SharedState){

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
    editProduct(key: number){
      
       this.state.id = key;
       this.state.mode=MODES.EDIT;
    }
    createProduct(){
        this.state.id = undefined;
       this.state.mode=MODES.CREATE; 
    }

}