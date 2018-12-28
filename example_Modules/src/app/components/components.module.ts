import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {CommonModule} from "../common/common.module";
import {FormsModule,ReactiveFormsModule } from "@angular/forms"
import {ProductFormComponent} from "./productForm.component"
import {ProductTableComponent} from "./productTable.component"
import {paToggleView} from "./toggleView.component"
import {PaDiscountDisplayComponent} from "./discountDisplay.component"
import {paDiscountEditorComponent} from "./discountEditor.component"
@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,CommonModule],
    declarations:[PaDiscountDisplayComponent,paDiscountEditorComponent,ProductFormComponent,ProductTableComponent],
    exports:[ProductFormComponent,ProductTableComponent]
})
export class ComponentsModule{

}