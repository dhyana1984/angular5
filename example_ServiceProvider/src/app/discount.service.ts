import {Injectable,Inject} from "@angular/core";
import {LogService,LOG_SERVICE,LogLevel} from "./log.service"

//通过依赖注入管理和分发的对象被称之为服务
@Injectable()
export class DiscountService{

    // private logger:LogService;
    private discountValue: number = 10;
    //@inject是作为令牌的装饰器修饰服务,logger是在app.module的providers中引用该服务时在provide中定义的，作为标识令牌
   // constructor(@Inject("logger") private logger:LogService){
    //   constructor(@Inject(LOG_SERVICE) private loggers:LogService[]){ //由于这个服务的令牌有多个实现，所以需要用数组
    //     this.logger = loggers.find(t => t.minimumLevel==LogLevel.DEBUG);//使用find方法来定位minimumLevel属性为DEBUG的日志，并且将服务赋给logger
      constructor( private logger:LogService){
    }
    
    public get discount(): number{
        return this.discountValue;
    }
    public set discount(newValue:number){
        this.discountValue=newValue || 0;
    }
    public applyDiscount(price:number){
        this.logger.logInfoMessage(`Discount ${this.discount}` +` applied to price: ${price}`)
        return Math.max(price-this.discountValue,5)
    }
} 