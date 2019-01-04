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
    lastId:number;
    constructor(private model:Model, activeRoute:ActivatedRoute, private router:Router){
        //通过activeRoute.snapshot.url取到路由地址，然后判断是否是edit一以此来更新状态
        //this.editing = activeRoute.snapshot.url[1].path == "edit";

        //通过activeRoute.snapshot.params["mode"]获取app.routing.ts中定义的合并的路由的路由参数:mode
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        let id =activeRoute.snapshot.params["id"];
        if(id != null){
            //接收name, category, price 三个可选参数
            let name = activeRoute.snapshot.params["name"];
            let category = activeRoute.snapshot.params["category"];
            let price = activeRoute.snapshot.params["price"];
            if(name!= null && category!= null && price!= null){
                this.product.id=id;
                this.product.name=name;
                this.product.category=category;
                this.product.price=price;
            } else{//如果可选参数不存在，则使用模型查询
                //这里的||new Product()是有必要的，因为异步请求数据可能还没到达，如果直接访问会报错
                
                Object.assign(this.product,model.getProduct(id)||new Product())
            }
        }
       
    }
    editing : boolean =false;
    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            //提交完修改或新增以后回到table，所以不需要这些了
            // this.product = new Product();
            // form.reset();
            this.router.navigateByUrl("/");
        }
    }
    resetForm(){
        this.product = new Product();
    }
}
