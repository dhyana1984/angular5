import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {ProductFormComponent} from "./components/productForm.component"
import {ProductTableComponent} from "./components/productTable.component"
import {FormsModule,ReactiveFormsModule } from "@angular/forms"
import {CommonModule} from "./common/common.module";
import {ModelModule} from "./model/model.module";
import {ComponentsModule} from "./components/components.module"
// import { SimpleDataSource } from "./model/datasource.model";
// import { Model } from "./model/repository.model";
@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,ModelModule,CommonModule,ComponentsModule],
    // declarations:[ 
    //                 //因为ModelModule已经为Model和SimpleDataSource定义了提供程序，所以只用在imports里面加上ModelModule即可
    //                 //CommonModule和ComponentsModule同理
    //                 // Model,SimpleDataSource 
    //             ],
    // bootstrap:[ProductComponent]
    bootstrap:[ProductFormComponent, ProductTableComponent] 
})
export class AppModule{
    
}  