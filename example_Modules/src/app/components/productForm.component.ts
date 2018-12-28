import { Component, Output, EventEmitter, ViewEncapsulation, ViewChildren,QueryList,SkipSelf,Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductFormGroup } from "../model/form.model";
import {Model} from "../model/repository.model";
import { VALUE_SERVICE} from "../common/valueDisplay.directive"


@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    //这里定义的样式只会影响模板里面元素的样式
    // styles:["div {background-color: lightgreen}"] 
    // styleUrls:["productForm.component.css"],
    // encapsulation:ViewEncapsulation.Emulated //ViewEncapsulation.Emulated是默认选项，模拟shadow DOM，为不同组件的模板动态生成属性以不互相影响css
    // providers: [{provide:VALUE_SERVICE,useValue:"Orange"}]//为全部子组件提供了一个VALUE_SERVICE令牌的本地提供程序
    viewProviders:[{provide:VALUE_SERVICE, useValue:"Orange"}] //viewProviders为视图解析依赖提供程序，不为子内容解析依赖
})
export class ProductFormComponent {
    //依赖注入Model，不需要调用根组件的方法
    constructor(private model:Model, @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue:String){
        console.log("Service Value:"+ serviceValue);
    }
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    // @Output("paNewProduct")
    // newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            // this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
