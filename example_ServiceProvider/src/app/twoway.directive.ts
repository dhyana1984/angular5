import {Input, Output, EventEmitter, Directive, HostBinding, HostListener, SimpleChange} from "@angular/core"
@Directive({
    selector:"input[paModel]",
    exportAs: "paModel"//指定一个名称，在模板变量中用该名称来引用指令
})
export class PaModel{
    direction: string="None";
    //paModel绑定的实现使用输入属性和ngOnChange方法，响应表达式值的变化，通过input元素的value属性的宿主绑定来更细input元素内容
    @Input("paModel")
    modelProperty:String;

    ngOnChanges(changes: {[Property:string]:SimpleChange}): void {
        let change = changes["modelProperty"];
        if(change.currentValue != this.fieldValue){
            this.fieldValue = changes["modelProperty"].currentValue || "";
            this.direction = "Model";
        }
        
    }

    //paModelChange事件使用input事件的宿主监听实现，通过输出属性发送更新
    @Output("paModelChange")
    update = new EventEmitter<string>();

    @HostBinding("value")
    fieldValue:string = "";

    //通过制定一个额外参数，该事件调用的方法能够接受事件对象
    @HostListener("input",["$event.target.value"])
    updateValue(newValue:string){
        this.fieldValue= newValue;
        this.update.emit(newValue);
        this.direction = "Element"
    }
}