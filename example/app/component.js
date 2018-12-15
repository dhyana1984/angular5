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
var repository_model_1 = require("./repository.model");
var ProductComponent = (function () {
    function ProductComponent(ref) {
        this.model = new repository_model_1.Model();
        this.fontSizeWithUnits = "30px";
        this.fontSizeWithoutUnits = "30";
        // <any>window 全局变量
        window.appRef = ref;
        window.model = this.model;
    }
    ProductComponent.prototype.getProductByPosition = function (position) {
        return this.model.getProducts()[position];
    };
    ProductComponent.prototype.getClassesByPosition = function (position) {
        var product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    };
    ProductComponent.prototype.getClasses = function (key) {
        var product = this.model.getProduct(key);
        // return this.model.getProducts().length ==5 ?"bg-success":"bg-warning";
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    };
    //class绑定映射
    ProductComponent.prototype.getClassMap = function (key) {
        var product = this.model.getProduct(key);
        return {
            "text-xs-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    };
    ProductComponent.prototype.getStyles = function (key) {
        var product = this.model.getProduct(key);
        //可以是js的属性名称格式也可以是css的属性名称格式
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price > 50 ? "red" : "green"
        };
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app/template.html"
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
