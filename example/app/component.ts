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
    selectedProduct:string;
    getSelected(product:Product):boolean{

        return product.name ==this.selectedProduct;
    }

    newProduct :Product = new Product();
    get jsonProduct(){
        return JSON.stringify(this.newProduct);
    }

    addProduct(p:Product){
        console.log("New Product: " + this.jsonProduct)
    }
    //为每种错误生成验证消息
    getValidationMessage(state:any, thingName?:string){
        let thing:string = state.path || thingName;//如果没有收到参数，则使用path属性作为描述性字符
        let message: string[] = []
        if(state.errors){
            for(let errorName in state.errors){
                switch(errorName){
                    case "required":
                    message.push(`You must enter a ${thing}`);
                    break;

                    case "minlength":
                    message.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength}`)
                    break;

                    case "pattern":
                    message.push(`The ${thing} contains illegal characters`);
                    break;
                }
            }
        }
        return message;
    }

    //遍历表单元素，生成表单范围验证消息
    getFormValidationMessages(form:NgForm):string[]{
        let messages :string[]= [];
        Object.keys(form.controls).forEach(k =>{
            this.getValidationMessage(form.controls[k],k).forEach(m =>messages.push(m));
        });
        return messages;
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