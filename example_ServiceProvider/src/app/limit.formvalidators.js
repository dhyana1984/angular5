"use strict";
//自定义验证器，返回验证函数的工厂，参数是允许通过验证的最大值
var LimitValidator = (function () {
    function LimitValidator() {
    }
    LimitValidator.Limit = function (limit) {
        return function (control) {
            var val = Number(control.value); //获得用户输入的值
            if (val != NaN && val > limit) {
                return { "limit": { "limit": limit, "actualValue": val } }; //返回当前值和限制的值
            }
            else {
                return null;
            }
        };
    };
    return LimitValidator;
}());
exports.LimitValidator = LimitValidator;
