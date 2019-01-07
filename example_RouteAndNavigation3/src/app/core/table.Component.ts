import {Component, Inject} from "@angular/core";
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
import { ActivatedRoute } from "@angular/router";
// import {MODES,SharedState,SHARED_STATE} from "./sharedState.model"
// import {Observer} from "rxjs/Observer"

@Component({
    selector:"paTable",
    moduleId:module.id,
    templateUrl:"table.component.html"
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
    // editProduct(key: number){
    // //    this.state.id = key;
    // //    this.state.mode=MODES.EDIT;
    //     //observer的next方法指定用new SharedState(MODES.EDIT,key)创建一个新事件
    //     this.observer.next(new SharedState(MODES.EDIT,key));
    // }
    // createProduct(){
    // //    this.state.id = undefined;
    // //    this.state.mode=MODES.CREATE; 
    // this.observer.next(new SharedState(MODES.CREATE));
    // }

}