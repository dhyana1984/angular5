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
import {PaDiscountDisplayComponent} from "./discountDisplay.component"
import {paDiscountEditorComponent} from "./discountEditor.component"
import {DiscountService} from "./discount.service"
import {PaDiscountPipe} from "./discount.pipe"
import {PaDiscountAmountDirective} from "./discountAmount.directive";
import {SimpleDataSource} from "./datasource.model"
import {Model} from "./repository.model"
import {LogService,LOG_SERVICE,SpecialLogService,LogLevel,LOG_LEVEL} from "./log.service";
import {PaDisplayValueDirective,VALUE_SERVICE} from "./valueDisplay.directive"
let logger = new LogService();
logger.minimumLevel=LogLevel.DEBUG;
@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    declarations:[  ProductComponent,PaAttrDirective,PaModel,PaStructureDirective, 
                    PaIteratorDirective,PaCellColorSwitcher,PaCellColor,ProductFormComponent,ProductTableComponent,
                    paToggleView,PaAddTaxPipe,PaCategoryFilterPipe,PaDiscountDisplayComponent,paDiscountEditorComponent,
                    PaDiscountPipe,PaDiscountAmountDirective,PaDisplayValueDirective ],
    providers:[DiscountService,SimpleDataSource,Model,LogService,
        {
            provide:VALUE_SERVICE,
            useValue:"Apples"
        }
    //类提供程序
    // {
    //     //provide:LogService, //令牌
    //     // provide:"logger",//将字符串作为令牌，在别处的构造函数参数中引用时，需要加@Inject("logger")修饰参数
    //     provide:LOG_SERVICE, //用InjectToken对象作为Token
    //     useClass:SpecialLogService, //指定一个类的实现，比如可以指定父类作为实现或者子类作为实现
    //     multi: true             //用来传递一个服务对象数组以解析依赖，比如当同一个令牌可以配置多个类作为实现
    // },

    // {

    //     provide:LOG_SERVICE, 
    //     useClass:LogService, 
    //     multi: true             
    // },
    // //值提供程序
    // {
    //     //provide: LogService,    //令牌
    //     provide:LOG_LEVEL,
    //     useValue:logger         //定义了用来解析依赖的对象
    // },
    // {
    //     provide:LOG_LEVEL,
    //     useValue:LogLevel.ERROR
    // },
    // //工厂提供程序
    // {
    //     provide: LogService,
    //     deps:[LOG_LEVEL],                   //指定了一个由提供程序令牌组成的数组
    //     useFactory: (level) => {
    //         let logger = new LogService();  //指定了创建服务对象的函数
    //         logger.minimumLevel=level;
    //         return logger;
    //     }
    // },
    // {
    //     provide:LOG_LEVEL,
    //     useValue: LogLevel.DEBUG
    // },
    // //已有服务提供程序
    // {
    //     provide:"debugLevel",               //服务的令牌
    //     useExisting:LOG_LEVEL               //指定一个已有的提供程序的令牌
    // },
    // {
    //     provide: LogService,
    //     deps:["debugLevel"],                   //指定了一个由提供程序令牌组成的数组
    //     useFactory: (level) => {
    //         let logger = new LogService();  //指定了创建服务对象的函数
    //         logger.minimumLevel=level;
    //         return logger;
    //     }
    // }
    ],
    bootstrap:[ProductComponent]
})
export class AppModule{
    
} 