import {Pipe} from "@angular/core";
import {Product}from "../model/product.model";

@Pipe({
    name:"filter",
    //当下拉框选择某个category时，如果pure是true，则添加同category的产品不会添加到表格中，所以要把pure设置为false
    pure:false
})
export class PaCategoryFilterPipe{
    transform(products:Product[], category:string) :Product[]{
        return category == undefined? products : products.filter(t=> t.category==category);
    }
}