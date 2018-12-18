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
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var ProductComponent = (function () {
    function ProductComponent(ref) {
        this.model = new repository_model_1.Model();
        this.form = new form_model_1.ProductFormGroup(); //使用表单模型
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
        // <any>window 全局变量
        window.appRef = ref;
        window.model = this.model;
    }
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    ProductComponent.prototype.getSelected = function (product) {
        return product.name == this.selectedProduct;
    };
    Object.defineProperty(ProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.addProduct = function (p) {
        console.log("New Product: " + this.jsonProduct);
    };
    //为每种错误生成验证消息
    ProductComponent.prototype.getValidationMessage = function (state, thingName) {
        var thing = state.path || thingName; //如果没有收到参数，则使用path属性作为描述性字符
        var message = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        message.push("You must enter a " + thing);
                        break;
                    case "minlength":
                        message.push("A " + thing + " must be at least " + state.errors['minlength'].requiredLength);
                        break;
                    case "pattern":
                        message.push("The " + thing + " contains illegal characters");
                        break;
                }
            }
        }
        return message;
    };
    //遍历表单元素，生成表单范围验证消息
    ProductComponent.prototype.getFormValidationMessages = function (form) {
        var _this = this;
        var messages = [];
        Object.keys(form.controls).forEach(function (k) {
            _this.getValidationMessage(form.controls[k], k).forEach(function (m) { return messages.push(m); });
        });
        return messages;
    };
    ProductComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
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
