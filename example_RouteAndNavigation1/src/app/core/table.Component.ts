import {Component, Inject} from "@angular/core";
import {Model} from "../model/repository.model";
import {Product} from "../model/product.model";
// import {MODES,SharedState,SHARED_STATE} from "./sharedState.model"
// import {Observer} from "rxjs/Observer"

@Component({
    selector:"paTable",
    moduleId:module.id,
    templateUrl:"table.component.html"
})
export class TableComponent{
      
     constructor(private datamodel:Model,
    //             //组建生命了一个对SHARED_STATE服务的依赖，SHARED_STATE服务是作为一个Observer<SharedState>对象的接收
    //             //observer将会发送试用SharedState对象描述的事件
    /*            @Inject(SHARED_STATE) private observer: Observer<SharedState>*/){

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