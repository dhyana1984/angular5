import {Component,ApplicationRef} from "@angular/core"
import {Model} from "./repository.model"
import {Product} from "./product.model";
import {NgForm} from "@angular/forms"
import { NgFor } from "@angular/common";
import {ProductFormGroup} from "./form.model"



@Component({
    selector:"app",
    templateUrl:"app/template.html"
})
export class ProductComponent{
    model: Model = new Model();
    form: ProductFormGroup = new ProductFormGroup();//使用表单模型

    constructor(ref:ApplicationRef){
       // <any>window 全局变量
        (<any>window).appRef=ref;
        (<any>window).model = this.model;
    }

    getProduct(key:number) : Product{
        return this.model.getProduct(key)
    }

    getProducts():Product[]{
        return this.model.getProducts();
    }

    newProduct :Product = new Product();
    get jsonProduct(){
        return JSON.stringify(this.newProduct);
    }

    deleteProduct(key: number){
        this.model.deleteProduct(key);
    }
    addProduct(p:Product){
        console.log("New Product: " + this.jsonProduct)
        this.model.saveProduct(p);
    }
    

    formSubmitted: boolean = false;

    submitForm(form:NgForm){    //form参数实际上就是模板引用变量被赋值的ngForm
        this.formSubmitted=true;
        if(form.valid){
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted= false;
        }
    }

}