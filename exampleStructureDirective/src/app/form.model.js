"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require("@angular/forms");
var limit_formvalidators_1 = require("./limit.formvalidators");
var ProductFormControl = (function (_super) {
    __extends(ProductFormControl, _super);
    function ProductFormControl(label, property, value, validator) {
        _super.call(this, value, validator);
        this.label = label;
        this.modelProperty = property;
    }
    //将模型验证消息放到表单模型类中
    ProductFormControl.prototype.getValidationMessages = function () {
        var message = [];
        if (this.errors) {
            for (var errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        message.push("You must enter a " + this.label);
                        break;
                    case "minlength":
                        message.push("A " + this.label + " must be at least " + this.errors['minlength'].requiredLength);
                        break;
                    case "maxlength":
                        message.push("A " + this.label + " must be no more than " + this.errors['maxlength'].requiredLength);
                        break;
                    case "pattern":
                        message.push("The " + this.label + " contains illegal characters");
                        break;
                    case "limit":
                        message.push("A " + this.label + " cannot be more than " + this.errors['limit'].limit);
                }
            }
        }
        return message;
    };
    return ProductFormControl;
}(forms_1.FormControl));
exports.ProductFormControl = ProductFormControl;
var ProductFormGroup = (function (_super) {
    __extends(ProductFormGroup, _super);
    function ProductFormGroup() {
        _super.call(this, {
            name: new ProductFormControl("Name", "name", "", forms_1.Validators.required),
            category: new ProductFormControl("Category", "category", "", forms_1.Validators.compose([forms_1.Validators.required,
                forms_1.Validators.pattern("^[A-Za-z ]+$"),
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(10)])),
            price: new ProductFormControl("Price", "price", "", forms_1.Validators.compose([forms_1.Validators.required,
                limit_formvalidators_1.LimitValidator.Limit(100),
                forms_1.Validators.pattern("^[0-9\.]+$")]))
        });
    }
    Object.defineProperty(ProductFormGroup.prototype, "ProductControls", {
        get: function () {
            var _this = this;
            return Object.keys(this.controls).map(function (k) { return _this.controls[k]; });
        },
        enumerable: true,
        configurable: true
    });
    //将表单验证信息放到表单类中
    ProductFormGroup.prototype.getFormValidationMessages = function (form) {
        var messages = [];
        this.ProductControls.forEach(function (t) {
            t.getValidationMessages().forEach(function (m) { return messages.push(m); });
        });
        return messages;
    };
    return ProductFormGroup;
}(forms_1.FormGroup));
exports.ProductFormGroup = ProductFormGroup;
