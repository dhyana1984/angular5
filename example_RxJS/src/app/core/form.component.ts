import { Component, Inject} from "@angular/core";
import { NgForm} from "@angular/forms";
import { Product } from "../model/product.model";
import {Model} from "../model/repository.model";
import {MODES,SharedState,SHARED_STATE} from "./sharedState.model"
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/filter"
import "rxjs/add/operator/map"
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/skipWhile"

@Component({
    selector: "paForm",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls:["form.component.css"]
})
export class FormComponent {
    product:Product= new Product();
    lastId:number;
    constructor(private model:Model, 
        //组件声明了一个对SHARED_STATE服务的依赖，这个依赖被当做一个Observable<SharedState>接收
        //stateEvents这个对象是一个Observable，其通知则是SharedState对象，代表用户发起的编辑或者创建操作
        //组件调用了stateEvents.subscribe方法，提供了一个函数来接收每一个SharedState对象，并使用这个对象来更新组件状态
        @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>){
        stateEvents
            //忽略事件，慎用
            .skipWhile(state => state.mode==MODES.EDIT)
            //.map(state => state.mode == MODES.EDIT? state.id : -1)
            //点击edit以后，修改字段，然后再点击edit，修改不会丢失
            //distinctUntilChanged不知道如何比较对象总是假定任何对象都是不同，所以可以自定义一个比较函数
            .distinctUntilChanged((firstState, secondState) => firstState.mode == secondState.mode && firstState.id==secondState.id) 
            // .filter(id => id!=3)
            .subscribe(update => {
            this.product = new Product();
            if(update.id != undefined){
                Object.assign(this.product, this.model.getProduct(update.id));
            }
            this.editing = update.mode == MODES.EDIT;
        })
       
    }
    editing : boolean =false;
    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }
    resetForm(){
        this.product = new Product();
    }
    //使用ngDoCheck可能会在状态变更时产生问题，以及难以维护复杂逻辑的变更
    // ngDoCheck(): void {
    //     if(this.lastId != this.state.id){
    //         this.product = new Product();
    //         if(this.state.mode == MODES.EDIT){
    //             Object.assign(this.product, this.model.getProduct(this.state.id));
    //         }
    //         this.lastId = this.state.id;
    //     }
        
    // }
}
