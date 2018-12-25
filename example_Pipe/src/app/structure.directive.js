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
var PaStructureDirective = (function () {
    //该构造函数表明这是一个结构型指令
    //ViewContainerRef用于管理视图容器，template出现的地方该指令负责这块内容,表示template在html中占用的地方
    //TempateRef表示template的内容
    function PaStructureDirective(container, template) {
        this.container = container;
        this.template = template;
        //如果不定义showTable，一开始表格不会显示，因为指令表达式是以前从未定义的一个变量
        //这里显示定义变量了，给予false初始值
        this.showTable = false;
    }
    PaStructureDirective.prototype.ngOnChanges = function (changes) {
        //接受SimpleChange对象，根据表达式的值显示或隐藏template的内容
        var change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        }
        else if (change.currentValue) {
            //此方法是向用户显示template的内容，属于ViewContainerRef类
            this.container.createEmbeddedView(this.template);
        }
    };
    __decorate([
        core_1.Input("paIf"), 
        __metadata('design:type', Boolean)
    ], PaStructureDirective.prototype, "expressionResult", void 0);
    PaStructureDirective = __decorate([
        core_1.Directive({
            selector: "[paIf]" //表示用于匹配具有paIf属性的宿主元素
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], PaStructureDirective);
    return PaStructureDirective;
}());
exports.PaStructureDirective = PaStructureDirective;
