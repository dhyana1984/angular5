//自定义指令，创建页面导航按钮
//结构型指令，通过counter属性应用于元素，并且使用Angular为重复创建内容提供特殊功能，但是并非通过遍历集合中的所有对象来创建内容
//而是产生一组可用于创建分页导航按钮编号
import{
    Directive,ViewContainerRef,TemplateRef,Input,Attribute,SimpleChanges
} from "@angular/core";

@Directive({
    selector:"[counterOf]"
})
export class CounterDirective{
    constructor(private container:ViewContainerRef, private template: TemplateRef<Object>){

    }

    @Input("counterOf")
    counter:number;

    ngOnChanges(changes:SimpleChanges){
        this.container.clear();
        for(let i=0; i<this.counter; i++){
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1));
        }
    }
}

class CounterDirectiveContext{
    constructor(public $implicit:any){}
}