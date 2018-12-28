import {Component , Input} from "@angular/core";
import {DiscountService} from "../common/discount.service";
@Component({
    selector:"paDiscountDisplay",
    template:`<div class="bg-info p-a-1">
                The discount is {{discounter.discount}}
              <div>`
})
export class PaDiscountDisplayComponent{
    //通过依赖注入获得discounter，就不再需要输入属性了
    constructor(private discounter:DiscountService){

    }

    // @Input("discounter")
    // discounter:DiscountService;
}