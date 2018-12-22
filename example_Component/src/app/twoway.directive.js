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
var PaModel = (function () {
    function PaModel() {
        this.direction = "None";
        //paModelChange事件使用input事件的宿主监听实现，通过输出属性发送更新
        this.update = new core_1.EventEmitter();
        this.fieldValue = "";
    }
    PaModel.prototype.ngOnChanges = function (changes) {
        var change = changes["modelProperty"];
        if (change.currentValue != this.fieldValue) {
            this.fieldValue = changes["modelProperty"].currentValue || "";
            this.direction = "Model";
        }
    };
    //通过制定一个额外参数，该事件调用的方法能够接受事件对象
    PaModel.prototype.updateValue = function (newValue) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    };
    __decorate([
        core_1.Input("paModel"), 
        __metadata('design:type', String)
    ], PaModel.prototype, "modelProperty", void 0);
    __decorate([
        core_1.Output("paModelChange"), 
        __metadata('design:type', Object)
    ], PaModel.prototype, "update", void 0);
    __decorate([
        core_1.HostBinding("value"), 
        __metadata('design:type', String)
    ], PaModel.prototype, "fieldValue", void 0);
    __decorate([
        core_1.HostListener("input", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], PaModel.prototype, "updateValue", null);
    PaModel = __decorate([
        core_1.Directive({
            selector: "input[paModel]",
            exportAs: "paModel" //指定一个名称，在模板变量中用该名称来引用指令
        }), 
        __metadata('design:paramtypes', [])
    ], PaModel);
    return PaModel;
}());
exports.PaModel = PaModel;
