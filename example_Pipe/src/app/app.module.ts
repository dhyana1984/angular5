import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {ProductComponent} from "./component"
import {FormsModule,ReactiveFormsModule } from "@angular/forms"
import {PaAttrDirective} from "./attr.directive"
import {PaModel} from "./twoway.directive"
import {PaStructureDirective} from "./structure.directive"
import {PaIteratorDirective} from "./iterator.directive"
import {PaCellColorSwitcher} from "./cellColorSwitcher.directive"
import {PaCellColor} from "./cellColor.directive"
import {ProductFormComponent} from "./productForm.component"
import {ProductTableComponent} from "./productTable.component"
import {paToggleView} from "./toggleView.component"
import {PaAddTaxPipe} from "./addTax.pipe"
import {PaCategoryFilterPipe} from "./categoryFilter"

@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    declarations:[  ProductComponent,PaAttrDirective,PaModel,PaStructureDirective, 
                    PaIteratorDirective,PaCellColorSwitcher,PaCellColor,ProductFormComponent,ProductTableComponent,
                    paToggleView,PaAddTaxPipe,PaCategoryFilterPipe],
    bootstrap:[ProductComponent]
})
export class AppModule{
    
} 