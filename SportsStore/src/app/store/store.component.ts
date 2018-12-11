import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {Cart} from "../model/cart.model";
import {Router} from "@angular/router";

@Component({
    selector:"store",
    moduleId: module.id,
    templateUrl:"store.component.html"
})
export class StoreComponent{
    public productsPerPage=4;
    public selectedPage=1;
    public selectedCategory = null;
    constructor(private repository: ProductRepository, private cart:Cart, private router:Router){

    }

    get products(): Product[]{
        let pageIndex =(this.selectedPage -1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex+this.productsPerPage);
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory?:string){
        this.selectedCategory=newCategory;
    }
    changePage(newPage:number){
        this.selectedPage=newPage;
    }
    changePageSize(newSize:number){
        this.productsPerPage=Number(newSize);//由于是从页面的静态<option>传值过来，所以必须转换成number
        this.changePage(1);
    }

    get pageNumbers():number[]{
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((x,i) => i+1);
    }

    get pageCount(): number{
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage)
    }

    addProductToCart(product:Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");//点击添加到购物车后导航到购物车详情
    }


}