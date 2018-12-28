//将所有移动到这个文件夹的文件的功能汇总起来
import {NgModule} from "@angular/core";
import {SimpleDataSource} from "./datasource.model";
import {Model} from "./repository.model";
@NgModule({
    providers:[Model, SimpleDataSource]
})
export class ModelModule{
    
}