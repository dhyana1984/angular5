import {NgModule} from "@angular/core"
import {PaAddTaxPipe} from "./addTax.pipe"
import {PaAttrDirective} from "./attr.directive"
import {PaCategoryFilterPipe} from "./categoryFilter.pipe"
import {PaCellColorSwitcher} from "./cellColorSwitcher.directive"
import {PaCellColor} from "./cellColor.directive"
import {DiscountService} from "./discount.service"
import {PaDiscountPipe} from "./discount.pipe"
import {PaDiscountAmountDirective} from "./discountAmount.directive";
import {PaIteratorDirective} from "./iterator.directive"
import {PaStructureDirective} from "./structure.directive"
import {PaModel} from "./twoway.directive"
import {PaDisplayValueDirective,VALUE_SERVICE} from "./valueDisplay.directive"
import {LogService,LOG_SERVICE,SpecialLogService,LogLevel,LOG_LEVEL} from "./log.service";
import {ModelModule} from "../model/model.module";
@NgModule({
    imports:[ModelModule],
    providers:[
        LogService,DiscountService, 
        {provide:VALUE_SERVICE,useValue:"Apples"}
    ],
    declarations:[PaAttrDirective,PaModel,PaStructureDirective, 
        PaIteratorDirective,PaCellColorSwitcher,PaCellColor,
        PaAddTaxPipe,PaCategoryFilterPipe,
        PaDiscountPipe,PaDiscountAmountDirective,PaDisplayValueDirective,],
    exports:[PaAttrDirective,PaModel,PaStructureDirective, 
        PaIteratorDirective,PaCellColorSwitcher,PaCellColor,
        PaAddTaxPipe,PaCategoryFilterPipe,
        PaDiscountPipe,PaDiscountAmountDirective,PaDisplayValueDirective]
})
export class CommonModule{

}

