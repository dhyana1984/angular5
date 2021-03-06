import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {OrderRepository} from "../model/order.repository"
import {Order} from "../model/order.model"



@Component({
    moduleId:module.id,
    templateUrl:"checkout.component.html",
    styleUrls:["checkout.component.css"] //用于指定一个或多个css样式表
    // template:`<div><h3 class="bg-info p-a-1">Checkout Component</h3></div>`
})
export class CheckoutComponent{
    orderSent:boolean =false;
    submitted: boolean = false;

    constructor(public repository:OrderRepository, public order:Order){

    }

    submitOrder(form:NgForm){
        this.submitted = true;
        if(form.valid){
            this.repository.saveOrder(this.order).subscribe(order =>{
                this.order.clear();
                this.orderSent=true;
                this.submitted = false;
            });
        }
    }
}