import {Component, Input} from "@angular/core";
import {DiscountService} from "../common/discount.service";
@Component({
    selector:"paDiscountEditor",
    template:`<div class="form-group">
                <label>Discount</label>
                <input [(ngModel)]="discounter.discount" class = "form-control" type="number">
             </div>`
})
export class paDiscountEditorComponent{

    ////通过依赖注入获得discounter，就不再需要输入属性了
    constructor(private discounter:DiscountService){ }


    // @Input("discounter")
    // discounter: DiscountService;
}