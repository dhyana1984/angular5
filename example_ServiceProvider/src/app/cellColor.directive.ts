import {Directive, HostBinding} from "@angular/core";
@Directive({
    selector:"td[paApplyColor]"
})
export class PaCellColor{
    //绑定到宿主元素的class属性
    @HostBinding("class")
    bgClass:String="";
    setColor(dark:boolean){
        this.bgClass=dark? "bg-inverse":"";
    }
}