import {Directive, HostBinding} from "@angular/core";
import {LogService} from "./log.service";
@Directive({
    selector:"td[paApplyColor]",
    providers:[LogService] //建立一个本地提供程序
})
export class PaCellColor{
    //绑定到宿主元素的class属性
    @HostBinding("class")
    bgClass:String="";
    setColor(dark:boolean){
        this.bgClass=dark? "bg-inverse":"";
    }
}