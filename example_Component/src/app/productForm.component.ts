import { Component, Output, EventEmitter, ViewEncapsulation, ViewChildren,QueryList } from "@angular/core";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";


@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    //这里定义的样式只会影响模板里面元素的样式
    // styles:["div {background-color: lightgreen}"] 
    styleUrls:["productForm.component.css"],
    encapsulation:ViewEncapsulation.Emulated //ViewEncapsulation.Emulated是默认选项，模拟shadow DOM，为不同组件的模板动态生成属性以不互相影响css

})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    formSubmitted: boolean = false;

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.formSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.formSubmitted = false;
        }
    }
}
