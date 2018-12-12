import {Injectable} from "@angular/core";
import{Product} from "./product.model";
// import {StaticDataSource} from "./static.datasource";
import {RestDataSource} from "./rest.datasource"

@Injectable()
export class ProductRepository{
    private products: Product[] = [];
    private Categories: string[] = [];

    constructor(private dataSource:RestDataSource){
        dataSource.getProducts().subscribe(data =>{
            this.products = data;
            this.Categories = data.map(t => t.category).filter((c,index,array) => array.indexOf(c)==index).sort();


        });
    }

    getProducts(category: string = null): Product[]{
        return this.products.filter(t => category ==null || category == t.category);
    }

    getProduct(id: number):Product{
        return  this.products.find(t=>t.id ==id);
    }

    getCategories(): string[]{
        return this.Categories;
    }

    saveProduct(product:Product){
        if(product.id==null || product.id==0){
            this.dataSource.saveProduct(product).subscribe(t=> this.products.push(t));
        }else{
            this.dataSource.updateProduct(product).subscribe(t => {
                this.products.splice(this.products.findIndex(p=>p.id==product.id),1,product);
            })
        }
    }


    deleteProduct(id: number){
        this.dataSource.deleteProduct(id).subscribe(p =>{
            this.products.splice(this.products.findIndex(p => p.id==id),1);
        })
    }
}