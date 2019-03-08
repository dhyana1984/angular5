webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORTS STORE</a>\r\n</div>\r\n<div class=\"m-t-1\">\r\n    <div class=\"col-xs-3\">\r\n        <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/products\" routeLinkActive=\"active\">\r\n        Products\r\n        </button>\r\n        <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/orders\" routeLinkActive=\"active\">\r\n            Orders\r\n        </button>\r\n        <button class=\"btn btn-outline-info btn-block\" (click)=\"logout()\">\r\n                Logout\r\n         </button>\r\n    </div>\r\n    <div class=\"col-xs-9\">\r\n        <router-outlet></router-outlet>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminComponent.prototype.logout = function () {
        this.auth.clear();
        this.router.navigateByUrl("/");
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/admin.Component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__("../../../../../src/app/admin/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/admin/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productTable_component__ = __webpack_require__("../../../../../src/app/admin/productTable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__productEditor_component__ = __webpack_require__("../../../../../src/app/admin/productEditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orderTable_component__ = __webpack_require__("../../../../../src/app/admin/orderTable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild([
    { path: "auth", component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */] },
    {
        path: "main", component: __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: "products/:mode/:id", component: __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products/:mode", component: __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */] },
            { path: "products", component: __WEBPACK_IMPORTED_MODULE_7__productTable_component__["a" /* ProductTableComponent */] },
            { path: "orders", component: __WEBPACK_IMPORTED_MODULE_9__orderTable_component__["a" /* OrderTableComponent */] },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], routing],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */], __WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_8__productEditor_component__["a" /* ProductEditorComponent */], __WEBPACK_IMPORTED_MODULE_7__productTable_component__["a" /* ProductTableComponent */], __WEBPACK_IMPORTED_MODULE_9__orderTable_component__["a" /* OrderTableComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-info p-a-1 text-xs-center\">\r\n    <h3>Sports Admin</h3>\r\n</div>\r\n<div class=\"bg-danger m-t-1 p-a-1 text-xs-center\" *ngIf=\"errorMessage != null\">\r\n    {{errorMessage}}\r\n</div>\r\n<div class=\"p-a-1\">\r\n    <form  (ngSubmit)=\"authenticate(form)\" #form=\"ngForm\" novalidate>\r\n      <div class=\"form-group\">\r\n          <label >Name</label>\r\n          <input name=\"username\" class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Password</label>\r\n        <input  name=\"password\"  class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" required>\r\n      </div>\r\n      <div class=\"text-xs-center\">\r\n        <button class=\"btn btn-secondary\" routerLink=\"/\">\r\n            Go Back\r\n        </button>\r\n        <button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n      </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (form.valid) {
            //此处验证身份
            this.auth.authenticate(this.username, this.password).subscribe(function (response) {
                if (response) {
                    _this.router.navigateByUrl("/admin/main");
                }
                _this.errorMessage = "Authentication Failed";
            });
            this.router.navigateByUrl("/admin/main");
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/auth.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    //这个方法名必须是canActivate
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__model_auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/admin/orderTable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-check\">\r\n    <label  class=\"form-check-label\">\r\n    <input  class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"includeShipped\">\r\n    Display Shipped Orders\r\n    </label>\r\n  \r\n</div>\r\n<table class=\"table table-sm\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Zip</th>\r\n            <th colspan=\"2\">Cart</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngIf=\"getOrders().length==0\">\r\n            <td colspan=\"5\">There is no order</td>\r\n        </tr>\r\n        <ng-template ngFor let-o [ngForOf]=\"getOrders()\">\r\n            <tr>\r\n                <td>{{o.name}}</td>\r\n                <td>{{o.zip}}</td>\r\n                <th>Product</th>\r\n                <th>Quantity</th>\r\n                <td>\r\n                    <button class=\"btn btn-warning\" (click)=\"markShipped(o)\">ship</button>\r\n                    <button class=\"btn btn-danger\" (click)=\"delete(o.id)\">\r\n                        Delete\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let line of o.cart.lines\">\r\n                <td colspan=\"2\"></td>\r\n                <td>{{line.product.name}}</td>\r\n                <td>{{line.quantity}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/orderTable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order_repository__ = __webpack_require__("../../../../../src/app/model/order.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTableComponent = /** @class */ (function () {
    function OrderTableComponent(repository) {
        this.repository = repository;
        this.includeShipped = false;
    }
    OrderTableComponent.prototype.getOrders = function () {
        var _this = this;
        return this.repository.getOrders().filter(function (t) { return _this.includeShipped || !t.shipped; });
    };
    OrderTableComponent.prototype.markShipped = function (order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    };
    OrderTableComponent.prototype.delete = function (id) {
        this.repository.deleteOrder(id);
    };
    OrderTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // template: `<div class="bg-primary p-a-1"><h3>Order Table Placeholder</h3></div>`
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/orderTable.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */]])
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/productEditor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-a-1\" [class.bg-warning]=\"editing\">\r\n    <h5>{{editing?\"Edit\":\"Create\"}} Product</h5>\r\n</div>\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" name=\"name\" [(ngModel)] =\"product.name\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <input class=\"form-control\" name=\"category\" [(ngModel)] =\"product.category\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\" name=\"description\" [(ngModel)] =\"product.description\"></textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input class=\"form-control\" name=\"price\" [(ngModel)] =\"product.price\"/>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" [class.btn-warning]=\"editing\">\r\n        {{editing?\"Save\":\"Create\"}}\r\n    </button>\r\n    <button type=\"reset\" class=\"btn btn-secondary\" routerLink=\"/admin/main/products\">\r\n        Cancel\r\n    </button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/productEditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_product_model__ = __webpack_require__("../../../../../src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditorComponent = /** @class */ (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__model_product_model__["a" /* Product */]();
        this.editing = activeRoute.snapshot.params["mode"] == "edit"; //获取路由片段,判断是否edit
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"])); //根据路由片段的id获得product
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    };
    ProductEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // template: `<div class="bg-warning p-a-1"><h3>Product Editor Placeholder</h3></div>`
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/productEditor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__model_product_repository__["a" /* ProductRepository */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/productTable.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Category</th>\r\n            <th>Price</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of getProducts()\">\r\n            <td>{{p.id}}</td>\r\n            <td>{{p.name}}</td>\r\n            <td>{{p.category}}</td>\r\n            <td>{{p.price | currency:\"USD\":\"true\":\"2.2-2\"}}</td>\r\n            <td>\r\n                <button class=\"btn btn-sm btn-warning\" [routerLink]=\"['/admin/main/products/edit',p.id]\">Edit</button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">Delete</button>\r\n            </td> \r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" routerLink=\"/admin/main/products/create\">\r\n    Create New Product\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/admin/productTable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductTableComponent = /** @class */ (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
    }
    ProductTableComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(id);
    };
    ProductTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/admin/productTable.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */]])
    ], ProductTableComponent);
    return ProductTableComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map