import {Product} from "./product.model"
// import {StaticDataSource} from "./static.datasource"
import {Injectable} from "@angular/core"
import { RestDataSource } from "./rest.datasource";
import {Observable} from "rxjs/Observable";

@Injectable()
export class Model{
    //private dataSource:SimpleDataSource;
    private products:Product[] = new Array<Product>();
    private locator= (p: Product,id:number) =>p.id==id;
    constructor(private dataSource:RestDataSource){ 
        // this.dataSource=new RestDataSource();
        // this.products = new Array<Product>();
        this.dataSource.getData().subscribe(t => this.products = t);
    }

    getProducts():Product[]{
        return this.products;
    }
    getProduct(id:number):Product{
        return this.products.find(t=>this.locator(t,id));
    }
    //返回集合后一个对象id
    getNextProductId(id:number):number{
        let index = this.products.findIndex(p => this.locator(p,id));
        if(index> -1){
            return this.products[this.products.length > index+2 ? index+1:0].id;
        }else{
            return id||0;
        }
    }
    //返回集合前一个对象id
    getPreviousProductId(id:number):number{
        let index = this.products.findIndex(p => this.locator(p,id));
        if(index> -1){
            return this.products[index > 0 ? index-1: this.products.length-1].id;
        }else{
            return id||0;
        }
    }

    saveProduct(product:Product){
        if(product.id==0 || product.id==null){
            // product.id=this.generateID();
            // this.products.push(product);
            this.dataSource.saveProduct(product).subscribe(t=>this.products.push(t))
        }else{
            
            this.dataSource.updateProduct(product).subscribe( t=>{
                let index = this.products.findIndex(p => this.locator(p,t.id));
                this.products.splice(index,1,t);
            })
            
        }
    }

    deleteProduct(id:number){

        this.dataSource.deleteProduct(id).subscribe(() =>　{
            let index = this.products.findIndex(p => this.locator(p,id));
            if(index>-1){
                
                this.products.splice(index,1)
            }
        })
       
    
    }



    private generateID():number{
        let candidate = 100;
        while(this.getProduct(candidate) != null){
            candidate++
        }
        return candidate;
    }
}