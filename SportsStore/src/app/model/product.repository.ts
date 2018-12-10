import {Injectable} from "@angular/core";
import{Product} from "./product.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()
export class ProductRepository{
    private products: Product[] = [];
    private Categories: string[] = [];

    constructor(private dataSource:StaticDataSource){
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
}