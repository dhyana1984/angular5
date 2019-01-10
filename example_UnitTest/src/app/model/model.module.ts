//将所有移动到这个文件夹的文件的功能汇总起来
import {NgModule} from "@angular/core";
import {HttpModule,JsonpModule} from "@angular/http"
// import {StaticDataSource} from "./static.datasource";
import {Model} from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { ModelResolver } from "./model.resolver";
@NgModule({
    imports:[HttpModule,JsonpModule],
    providers:[Model, RestDataSource,ModelResolver,
    {provide:REST_URL, useValue:`http://${location.hostname}:3500/products`}]
})
export class ModelModule{
    
}