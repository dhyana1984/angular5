"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var PaAttrDirective = (function () {
    //当Angular创建指令类的新实例时，应该使用属性为构造函数提供参数
    //Angular为每个与选择器匹配的元素分别创建一个新的装饰器实例，
    //并使用这些元素的属性为指令构造函数中带有@Attribute装饰器的参数提供值
    function PaAttrDirective(element) {
        // element.nativeElement.classList.add(  bgClass || "bg-success"); //使用@Input定义输入属性并设置是在创建指令实例之后，
        //所以要把这里的内容写到ngOnInit方法，称为生命周期钩子方法
        // this.element.nativeElement.addEventListener("click" , e =>{ //设置DOM事件的侦听器
        //     if(this.product != null){
        //         this.click.emit(this.product.category)//使用EventEmitter对象的emit方法来发送事件，参数是希望事件侦听器接收到的值
        //     }
        // })
        this.element = element;
        //输出指令，指定类的EventEmitter属性与模板事件绑定中使用的事件名称之间建立映射, 点击某一行，该产品的category会显示在input
        this.click = new core_1.EventEmitter(); //EventEmitter为Angular提供了事件机制
    }
    PaAttrDirective.prototype.triggerCustomEvent = function () {
        if (this.product != null) {
            this.click.emit(this.product.category);
        }
    };
    //使用ngOnchanges方法目的是重新进行表达式求值并更新输入属性时，该指令将进行响应
    PaAttrDirective.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        var change = changes["bgClass"];
        var classList = this.element.nativeElement.classList;
        //当响应输入属性值的变化时，指令必须确保撤销先前更新的影响，从previous类中删除元素
        //isFirstChange()可以不撤销实际并未应用的值，首次将值赋给输入属性时，也会调用onChanges方法
        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }
        //将元素添加到currentValue类
        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    };
    PaAttrDirective.prototype.ngOnInit = function () {
        //设置输入属性后，必须要把构造函数的方法写在设立，因为设置输入属性时在创建指令实例之后执行，
        this.element.nativeElement.classList.add(this.bgClass || "bg-siccess");
    };
    __decorate([
        core_1.Input("pa-attr"),
        core_1.HostBinding("class"), 
        __metadata('design:type', String)
    ], PaAttrDirective.prototype, "bgClass", void 0);
    __decorate([
        core_1.Input("pa-product"), 
        __metadata('design:type', product_model_1.Product)
    ], PaAttrDirective.prototype, "product", void 0);
    __decorate([
        core_1.Output("pa-category"), 
        __metadata('design:type', Object)
    ], PaAttrDirective.prototype, "click", void 0);
    __decorate([
        //EventEmitter为Angular提供了事件机制
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PaAttrDirective.prototype, "triggerCustomEvent", null);
    PaAttrDirective = __decorate([
        core_1.Directive({
            selector: "[pa-attr]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PaAttrDirective);
    return PaAttrDirective;
}());
exports.PaAttrDirective = PaAttrDirective;
