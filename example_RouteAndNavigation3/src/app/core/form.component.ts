import { Component, Inject} from "@angular/core";
import { NgForm} from "@angular/forms";
import { Product } from "../model/product.model";
import {Model} from "../model/repository.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: "paForm",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls:["form.component.css"]
})
export class FormComponent {
    product:Product= new Product();
    oringinalProduct = new Product();//用来储存初始的表单状态，发生改变后会触发路由失活守卫
    lastId:number;
    constructor(private model:Model, activeRoute:ActivatedRoute, private router:Router){
        //在组件内导航  
        //组件订阅了Observable<Params>，每当活动路由发生改变时，Observable<Params>就像订阅者发送一个新的Params对象
        //activeRoute属性会返回Observer对象发送最近路由变化的细节
        activeRoute.params.subscribe( params => {
            this.editing = activeRoute.snapshot.params["mode"] == "edit";
            let id = params["id"];
            if(id != null){             
                Object.assign(this.product,model.getProduct(id)||new Product())
                Object.assign(this.oringinalProduct,this.product);
            }
        })

       
    }
    editing : boolean =false;
    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //提交完修改或新增以后回到table，所以不需要这些了
            // this.product = new Product();
            // form.reset();
            this.oringinalProduct = this.product;
            this.router.navigateByUrl("/");
        }
    }
    // resetForm(){
    //     this.product = new Product();
    // }
}
