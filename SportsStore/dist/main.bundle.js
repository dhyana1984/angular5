webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app',
            // template: `<div class="bg-success p-a-1 text-xs-center">This is SportsStore</div>` //这里的属性是template，不是templateURL
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store_module__ = __webpack_require__("../../../../../src/app/store/store.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_cartDetail_component__ = __webpack_require__("../../../../../src/app/store/cartDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_checkout_component__ = __webpack_require__("../../../../../src/app/store/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__ = __webpack_require__("../../../../../src/app/storeFirst.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__store_store_module__["a" /* StoreModule */],
                //手工配置路由，每条路由映射到一个组件,通过守卫路由守卫每一个路由
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: "store", component: __WEBPACK_IMPORTED_MODULE_4__store_store_component__["a" /* StoreComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]]
                    },
                    {
                        path: "cart", component: __WEBPACK_IMPORTED_MODULE_5__store_cartDetail_component__["a" /* CartDetailComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]]
                    },
                    {
                        path: "checkout", component: __WEBPACK_IMPORTED_MODULE_6__store_checkout_component__["a" /* CheckoutComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]]
                    },
                    {
                        path: "admin",
                        //当导航到/admin时，应该从/app/admin/admin.module.ts文件加载由名为AdminModule的类定义的功能模块
                        loadChildren: "app/admin/admin.module#AdminModule",
                        canActivate: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]]
                    },
                    {
                        path: "**", redirectTo: "/store",
                        canActivate: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]]
                    } //通配符，将任何其他URL重定向到/store,显示StoreComponent
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__storeFirst_guard__["a" /* StoreFirstGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//创建一个服务可用于执行身份验证
var AuthService = /** @class */ (function () {
    function AuthService(datasource) {
        this.datasource = datasource;
    }
    AuthService.prototype.authenticate = function (username, password) {
        return this.datasource.authenticate(username, password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.datasource.auth_token != null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.clear = function () {
        this.datasource.auth_token = null;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource__["a" /* RestDataSource */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/model/cart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* unused harmony export CartLine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//购物车的模型

var Cart = /** @class */ (function () {
    function Cart() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    Cart.prototype.addLine = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var line = this.lines.find(function (line) { return line.product.id == product.id; });
        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    };
    Cart.prototype.updateQuantity = function (product, quantity) {
        var line = this.lines.find(function (line) { return line.product.id == product.id; });
        if (line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    };
    Cart.prototype.removeLine = function (id) {
        var index = this.lines.findIndex(function (line) { return line.product.id == id; });
        this.lines.splice(index, 1);
        this.recalculate();
    };
    Cart.prototype.clear = function () {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    };
    Cart.prototype.recalculate = function () {
        var _this = this;
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(function (l) {
            _this.itemCount += l.quantity;
            _this.cartPrice += (l.quantity * l.product.price);
        });
    };
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Cart);
    return Cart;
}());

var CartLine = /** @class */ (function () {
    function CartLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(CartLine.prototype, "lineTotal", {
        get: function () {
            return this.quantity * this.product.price;
        },
        enumerable: true,
        configurable: true
    });
    return CartLine;
}());



/***/ }),

/***/ "../../../../../src/app/model/model.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_datasource__ = __webpack_require__("../../../../../src/app/model/static.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_model__ = __webpack_require__("../../../../../src/app/model/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_model__ = __webpack_require__("../../../../../src/app/model/order.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_repository__ = __webpack_require__("../../../../../src/app/model/order.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/model/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__product_repository__["a" /* ProductRepository */], __WEBPACK_IMPORTED_MODULE_2__static_datasource__["a" /* StaticDataSource */], __WEBPACK_IMPORTED_MODULE_3__cart_model__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_4__order_model__["a" /* Order */], __WEBPACK_IMPORTED_MODULE_5__order_repository__["a" /* OrderRepository */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__static_datasource__["a" /* StaticDataSource */], useClass: __WEBPACK_IMPORTED_MODULE_6__rest_datasource__["a" /* RestDataSource */] },
                __WEBPACK_IMPORTED_MODULE_6__rest_datasource__["a" /* RestDataSource */], __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/order.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_model__ = __webpack_require__("../../../../../src/app/model/cart.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Order = /** @class */ (function () {
    function Order(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    Order.prototype.clear = function () {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.cart.clear();
    };
    Order = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_model__["a" /* Cart */]])
    ], Order);
    return Order;
}());



/***/ }),

/***/ "../../../../../src/app/model/order.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {StaticDataSource} from "./static.datasource";

var OrderRepository = /** @class */ (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    OrderRepository.prototype.loadOrders = function () {
        var _this = this;
        this.loaded = true;
        this.dataSource.getOrders().subscribe(function (orders) { return _this.orders = orders; });
    };
    OrderRepository.prototype.getOrders = function () {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    OrderRepository.prototype.updateOrder = function (order) {
        var _this = this;
        this.dataSource.updateOrder(order).subscribe(function (order) {
            _this.orders.splice(_this.orders.findIndex(function (o) { return o.id == order.id; }), 1, order);
        });
    };
    OrderRepository.prototype.deleteOrder = function (id) {
        var _this = this;
        this.dataSource.deleteOrder(id).subscribe(function (order) {
            _this.orders.splice(_this.orders.findIndex(function (o) { return id == o.id; }));
        });
    };
    OrderRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource__["a" /* RestDataSource */]])
    ], OrderRepository);
    return OrderRepository;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_datasource__ = __webpack_require__("../../../../../src/app/model/rest.datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {StaticDataSource} from "./static.datasource";

var ProductRepository = /** @class */ (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.Categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.Categories = data.map(function (t) { return t.category; }).filter(function (c, index, array) { return array.indexOf(c) == index; }).sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products.filter(function (t) { return category == null || category == t.category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (t) { return t.id == id; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.Categories;
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product).subscribe(function (t) { return _this.products.push(t); });
        }
        else {
            this.dataSource.updateProduct(product).subscribe(function (t) {
                _this.products.splice(_this.products.findIndex(function (p) { return p.id == product.id; }), 1, product);
            });
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource.deleteProduct(id).subscribe(function (p) {
            _this.products.splice(_this.products.findIndex(function (p) { return p.id == id; }), 1);
        });
    };
    ProductRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rest_datasource__["a" /* RestDataSource */]])
    ], ProductRepository);
    return ProductRepository;
}());



/***/ }),

/***/ "../../../../../src/app/model/rest.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PROTOCOL = "http";
var PORT = 3500;
var RestDataSource = /** @class */ (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.authenticate = function (user, pass) {
        var _this = this;
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(function (response) {
            var r = response.json();
            _this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    };
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, "products");
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, "products", product, true);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put, "products/" + product.id, product, true);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete, "products/" + id, null, true);
    };
    RestDataSource.prototype.getOrders = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, "orders", null, true);
    };
    RestDataSource.prototype.deleteOrder = function (id) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete, "orders/" + id, null, true);
    };
    RestDataSource.prototype.updateOrder = function (order) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put, "orders/" + order.id, order, true);
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post, "orders", order);
    };
    RestDataSource.prototype.sendRequest = function (verb, url, body, auth) {
        if (auth === void 0) { auth = false; }
        var request = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Request */]({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        //在请求中包含JWT Json Web Token
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", "Bearer<" + this.auth_token + ">");
        }
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    RestDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RestDataSource);
    return RestDataSource;
}());



/***/ }),

/***/ "../../../../../src/app/model/static.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_model__ = __webpack_require__("../../../../../src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        this.products = [
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](2, "Product 2", "Category 1", "Product 2 (Category 1)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](3, "Product 3", "Category 1", "Product 3 (Category 1)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](4, "Product 4", "Category 1", "Product 4 (Category 1)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](5, "Product 5", "Category 1", "Product 5 (Category 1)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](7, "Product 7", "Category 2", "Product 7 (Category 2)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](8, "Product 8", "Category 2", "Product 8 (Category 2)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](9, "Product 9", "Category 2", "Product 9 (Category 2)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](10, "Product 10", "Category 2", "Product 10 (Category 2)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](11, "Product 11", "Category 3", "Product 11 (Category 3)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](12, "Product 12", "Category 3", "Product 12 (Category 3)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](13, "Product 13", "Category 3", "Product 13 (Category 3)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](14, "Product 14", "Category 3", "Product 14 (Category 3)", 100),
            new __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */](15, "Product 15", "Category 3", "Product 15 (Category 3)", 100),
        ];
    }
    StaticDataSource.prototype.getProducts = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from([this.products]);
    };
    StaticDataSource.prototype.saveOrder = function (order) {
        console.log(JSON.stringify(order)); //模拟保存订单
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from([order]);
    };
    StaticDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StaticDataSource);
    return StaticDataSource;
}());

;


/***/ }),

/***/ "../../../../../src/app/store/cartDetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORTS STORE</a>\r\n</div>\r\n\r\n<div class=\"m-a-1\">\r\n    <h2 class=\"text-xs-center\">Your Cart</h2>\r\n    <table class=\"table table-bordered table-striped p-a-1\">\r\n        <thead>\r\n            <tr>\r\n                <th>Quantity</th>\r\n                <th>Product</th>\r\n                <th class=\"text-xs-right\">Price</th>\r\n                <th class=\"text-xs-right\">Subtotal</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"cart.lines.length==0\">\r\n                <td colspan=\"4\" class=\"text-xs-center\">\r\n                    Your cart is empty\r\n                </td>\r\n            </tr>\r\n            <tr *ngFor=\"let line of cart.lines\">\r\n                <td>\r\n                    <input type=\"number\" class=\"form-control-sm\" \r\n                    style=\"width:5em\" \r\n                    [value]=\"line.quantity\" \r\n                    (change)=\"cart.updateQuantity(line.product, $event.target.value)\">\r\n                </td>\r\n                <td>{{line.product.name}}</td>\r\n                <td class=\"text-xs-right\">\r\n                    {{line.product.price|currency:\"USD\":\"true\":\"2.2-2\"}}\r\n                </td>\r\n                <td class=\"text-xs-right\">\r\n                    {{(line.total)|currency:\"USD\":\"true\":\"2.2-2\"}}\r\n                </td>\r\n                <td class=\"text-xs-center\">\r\n                 <button class=\"btn btn-sm btn-danger\" (click)=\"cart.removeLine(line.product.id)\">Remove</button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"3\" class=\"text-xs-right\">\r\n                    Total:\r\n                </td>\r\n                <td class=\"text-xs-right\">\r\n                    {{cart.cartPrice | currency:\"USD\":\"true\":\"2.2-2\"}}\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</div>\r\n<div class=\"text-xs-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/store\">Continue Shopping</button>\r\n    <button class=\"btn btn-secondary\" routerLink=\"/checkout\" [disabled]=\"cart.lines.length==0\">Checkout</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/store/cartDetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cart_model__ = __webpack_require__("../../../../../src/app/model/cart.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/store/cartDetail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_cart_model__["a" /* Cart */]])
    ], CartDetailComponent);
    return CartDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/cartSummary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-xs-right\">\r\n    <small>\r\n        Your cart:\r\n        <span *ngIf=\"cart.itemCount > 0\">\r\n            {{cart.itemCount}}item(s)\r\n            {{cart.cartPrice| currency:\"USD\":\"true\":\"2.2-2\"}}\r\n        </span>\r\n        <span *ngIf=\"cart.itemCount == 0\">(empry)</span>\r\n    </small>\r\n    <!--routerLink是在点击时导航到URL  -->\r\n    <button class=\"btn btn-sm bg-inverse\" [disabled]=\"cart.itemCount==0\" routerLink=\"/cart\">\r\n        <i class=\"fa fa-shopping-cart\"></i>\r\n\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/store/cartSummary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartsSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cart_model__ = __webpack_require__("../../../../../src/app/model/cart.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cartsSummaryComponent = /** @class */ (function () {
    function cartsSummaryComponent(cart) {
        this.cart = cart;
    }
    cartsSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "cart-summary",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/store/cartSummary.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_cart_model__["a" /* Cart */]])
    ], cartsSummaryComponent);
    return cartsSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\r\ninput.ng-dirty.ng-valid { border: 2px solid #6bc502 }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/store/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORTS STORE</a>\r\n</div>\r\n<div *ngIf=\"orderSent\" class=\"m-a-1 text-xs-center\">\r\n    <h2>Thanks!</h2>\r\n    <p>Thanks for placing your order.</p>\r\n    <p>We'll ship your goods as soon as possible</p>\r\n    <button class=\"btn btn-primary\" routerLink=\"/store\">\r\n    Return to Store\r\n    </button>\r\n</div>\r\n<form *ngIf=\"!orderSent\" #form=\"ngForm\" novalidate (ngSubmit)=\"submitOrder(form)\" class=\"m-a-1\">\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Name</label>\r\n        <input class=\"form-control\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"order.name\" required>\r\n        <span *ngIf=\"submitted && name.invalid\" class=\"text-danger\">\r\n            Please enter your name\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Address</label>\r\n        <input class=\"form-control\" #address=\"ngModel\" name=\"address\" [(ngModel)]=\"order.address\" required>\r\n        <span *ngIf=\"submitted && address.invalid\" class=\"text-danger\">\r\n            Please enter your address\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">City</label>\r\n        <input class=\"form-control\" #city=\"ngModel\" name=\"city\" [(ngModel)]=\"order.city\" required>\r\n        <span *ngIf=\"submitted && city.invalid\" class=\"text-danger\">\r\n            Please enter your city\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">State</label>\r\n        <input class=\"form-control\" #state=\"ngModel\" name=\"state\" [(ngModel)]=\"order.state\" required>\r\n        <span *ngIf=\"submitted && state.invalid\" class=\"text-danger\">\r\n            Please enter your state\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Zip/Postal Code</label>\r\n        <input class=\"form-control\" #zip=\"ngModel\" name=\"zip\" [(ngModel)]=\"order.zip\" required>\r\n        <span *ngIf=\"submitted && zip.invalid\" class=\"text-danger\">\r\n            Please enter your zip/post code\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"\">Country</label>\r\n        <input class=\"form-control\" #country=\"ngModel\" name=\"country\" [(ngModel)]=\"order.country\" required>\r\n        <span *ngIf=\"submitted && country.invalid\" class=\"text-danger\">\r\n            Please enter your country\r\n        </span>\r\n    </div>\r\n    <div class=\"text-xs-center\">\r\n        <button class=\"btn btn-secondary\" routerLink=\"/cart\">\r\n            Back\r\n        </button>\r\n        <button class=\"btn btn-primary\" type=\"submit\">\r\n            Complete Order \r\n        </button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/store/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order_repository__ = __webpack_require__("../../../../../src/app/model/order.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_order_model__ = __webpack_require__("../../../../../src/app/model/order.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/store/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/store/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_order_repository__["a" /* OrderRepository */], __WEBPACK_IMPORTED_MODULE_2__model_order_model__["a" /* Order */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/counter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//自定义指令，创建页面导航按钮
//结构型指令，通过counter属性应用于元素，并且使用Angular为重复创建内容提供特殊功能，但是并非通过遍历集合中的所有对象来创建内容
//而是产生一组可用于创建分页导航按钮编号

var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("counterOf"),
        __metadata("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[counterOf]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */]])
    ], CounterDirective);
    return CounterDirective;
}());

var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());


/***/ }),

/***/ "../../../../../src/app/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORTS STORE</a>\r\n    <cart-summary></cart-summary>\r\n</div>\r\n<div class=\"col-xs-3  p-a-1\">\r\n    <!-- 按照category显示按钮 -->\r\n<button class=\"btn btn-block btn-outline-primary\" (click)=\"changeCategory()\">Home</button>\r\n<button *ngFor=\"let cat of categories\" \r\nclass=\"btn btn-outline-primary btn-block\" \r\n[class.active]=\"cat==selectedCategory\" \r\n(click)=\"changeCategory(cat)\">\r\n{{cat}}\r\n</button>\r\n<button class=\"btn btn-block btn-danger m-t-3\" routerLink=\"/admin\">\r\n    Admin\r\n</button>\r\n</div>\r\n<!-- 展示产品列表 -->\r\n<div class=\"col-xs-9 p-a-1\">\r\n    <div *ngFor=\"let product of products\" class=\"card card-outline-primary\">\r\n        <h4 class=\"card-header\">\r\n            {{product.name}}\r\n            <span class=\"pull-xs-right tag tag-pill tag-primary\">\r\n                {{product.price | currency:\"USD\":\"true\":\"2.2-2\"}}\r\n            </span>\r\n        </h4>\r\n        <div class=\"card-text p-a-1\">\r\n            {{product.description}}\r\n            <button class=\"btn btn-success btn-sm pull-xs-right\" (click)=\"addProductToCart(product)\">\r\n                Add To Cart\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-inline pull-xs-left m-r-1\">\r\n        <select class=\"form-control\" [value]=\"productsPerPage\" (change)=\"changePageSize($event.target.value)\">\r\n            <option value=\"3\">3 per Page</option>\r\n            <option value=\"4\">4 per Page</option>\r\n            <option value=\"6\">6 per Page</option>\r\n            <option value=\"8\">8 per Page</option>\r\n        </select>\r\n    </div>\r\n   \r\n   <div class=\"btn-group pull-xs-right\">\r\n        <!-- 使用*ngFor生成分页导航按钮 -->\r\n       <!-- <button *ngFor=\"let page of pageNumbers\" \r\n       (click)=\"changePage(page)\" \r\n       class=\"btn btn-outline-primary\"\r\n       [class.active]=\"page==selectedPage\">\r\n       {{page}}</button> -->\r\n       <button *counter=\"let page of pageCount\"  \r\n        (click)=\"changePage(page)\" \r\n        class=\"btn btn-outline-primary\"\r\n        [class.active]=\"page==selectedPage\">{{page}}</button>\r\n   </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_product_repository__ = __webpack_require__("../../../../../src/app/model/product.repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cart_model__ = __webpack_require__("../../../../../src/app/model/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreComponent = /** @class */ (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.productsPerPage = 4;
        this.selectedPage = 1;
        this.selectedCategory = null;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize); //由于是从页面的静态<option>传值过来，所以必须转换成number
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageNumbers", {
        get: function () {
            return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        get: function () {
            return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart"); //点击添加到购物车后导航到购物车详情
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "store",
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/store/store.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__model_product_repository__["a" /* ProductRepository */], __WEBPACK_IMPORTED_MODULE_2__model_cart_model__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store/store.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_model_module__ = __webpack_require__("../../../../../src/app/model/model.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counter_directive__ = __webpack_require__("../../../../../src/app/store/counter.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cartSummary_component__ = __webpack_require__("../../../../../src/app/store/cartSummary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cartDetail_component__ = __webpack_require__("../../../../../src/app/store/cartDetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkout_component__ = __webpack_require__("../../../../../src/app/store/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//在页面使用routerlink必须先在module导入RouterModule
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__model_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__store_component__["a" /* StoreComponent */], __WEBPACK_IMPORTED_MODULE_5__counter_directive__["a" /* CounterDirective */], __WEBPACK_IMPORTED_MODULE_6__cartSummary_component__["a" /* cartsSummaryComponent */], __WEBPACK_IMPORTED_MODULE_7__cartDetail_component__["a" /* CartDetailComponent */], __WEBPACK_IMPORTED_MODULE_8__checkout_component__["a" /* CheckoutComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__store_component__["a" /* StoreComponent */], __WEBPACK_IMPORTED_MODULE_7__cartDetail_component__["a" /* CartDetailComponent */], __WEBPACK_IMPORTED_MODULE_8__checkout_component__["a" /* CheckoutComponent */]]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/storeFirst.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFirstGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store_component__ = __webpack_require__("../../../../../src/app/store/store.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreFirstGuard = /** @class */ (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    //canActivate方法通过路由上下文来判断导航起点，如果不是从/store开始，重载页面就跳回/store
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != __WEBPACK_IMPORTED_MODULE_2__store_store_component__["a" /* StoreComponent */]) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], StoreFirstGuard);
    return StoreFirstGuard;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map