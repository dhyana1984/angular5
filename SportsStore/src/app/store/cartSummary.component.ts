import {Component} from "@angular/core";
import{Cart} from "../model/cart.model";

@Component({
    selector:"cart-summary",
    moduleId:module.id,
    templateUrl:"cartSummary.component.html"
})
export class cartsSummaryComponent{
    constructor(public cart:Cart){
        
    }
}