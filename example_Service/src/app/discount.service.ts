import {Injectable} from "@angular/core";

//通过依赖注入管理和分发的对象被称之为服务
@Injectable()
export class DiscountService{
    private discountValue: number = 10;
    public get discount(): number{
        return this.discountValue;
    }
    public set discount(newValue:number){
        this.discountValue=newValue || 0;
    }
    public applyDiscount(price:number){
        return Math.max(price-this.discountValue,5)
    }
} 