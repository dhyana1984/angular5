"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var bootApplication = function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
};
if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        platform_browser_dynamic_1.platformBrowserDynamic().destroy();
    });
}
if (document.readyState === "complete") {
    alert(1);
    bootApplication();
    alert(2);
}
else {
    alert(3);
    document.addEventListener("DOMContentLoaded", bootApplication);
    alert(4);
}
//# sourceMappingURL=boot.js.map