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
var PaIteratorDirective = (function () {
    function PaIteratorDirective(container, template, differs, changeDetector) {
        this.container = container;
        this.template = template;
        this.differs = differs;
        this.changeDetector = changeDetector;
        this.views = new Map();
    }
    PaIteratorDirective.prototype.ngOnInit = function () {
        //differ => IterableDiffer对象用于设置数据源集合变更检测
        //differs.find接受一个对象并返回一个能够为该对象创建差异器的IterableDifferFactory对象
        //IterableDifferFactory定义了create方法，返回一个IterableDiffer对象
        this.differ = this.differs.find(this.dataSource).create(this.changeDetector);
        //this.updateContent();
    };
    //使用ngDoCheck必须非常小心，在页面上触发焦点，点击，等等事件都会调用此方法。会有严重性能问题，所以要用差异比较器，只在模型增加和删除时调用ngDoCheck
    PaIteratorDirective.prototype.ngDoCheck = function () {
        var _this = this;
        //变更检测机制重要部分是IterableDiffer对象，被赋给了differ属性
        //IterableDiffer.diff方法接受一个对象进行比较，并返回变更列表，如果没有变更，则返回null
        var changes = this.differ.diff(this.dataSource);
        if (changes != null) {
            console.log("ngDoCheck Called, changes detected");
            //forEachAddedItem方法的函数参数，这个函数参数接收一个ChangeDetectorRef对象，对集合中每个新对象调用指定函数
            //addition就是一个ChangeDetectorRef对象 
            //item是这个属性返回数据项，trackById如果使用trackBy函数，这个属性返回标识值,currentIndex返回当前索引
            changes.forEachAddedItem(function (addition) {
                var context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
                context.view = _this.container.createEmbeddedView(_this.template, context);
                _this.views.set(addition.trackById, context); //使用set方法设置map
            });
            //响应删除
            var removals_1 = false;
            //删除第一步
            //从map中检索相应的PaIteratorContext对象，
            //获取其ViewRef对象并将该对象传给ViewContainerRef.reomve方法
            //从视图容器中删除与该对象关联的内容
            changes.forEachRemovedItem(function (removal) {
                removals_1 = true;
                var context = _this.views.get(removal.trackById); //使用set方法获取map的值
                if (context != null) {
                    _this.container.remove(_this.container.indexOf(context.view));
                    _this.views.delete(removal.trackById); //使用delete删除map的项
                }
            });
            //删除第二步，更新剩余对象的上下文数据，使得依赖视图容器中视图位置的绑定得到正确更新
            if (removals_1) {
                var index_1 = 0;
                //针对Map中每个上下文对象调用PaIteratorContext.setData方法更新视图在容器中的位置，并更新总数
                this.views.forEach(function (context) {
                    context.setData(index_1++, _this.views.size);
                });
            }
        }
    };
    PaIteratorDirective.prototype.updateContent = function () {
        this.container.clear();
        for (var i = 0; i < this.dataSource.length; i++) {
            //TemplateRef提供要插入到容器的内容，上下文对象为隐式值提供了数据，使用$implicit指定
            //正是$implicit属性被赋给模板变量item
            this.container.createEmbeddedView(this.template, new PaIteratorContext(this.dataSource[i], i, this.dataSource.length));
        }
    };
    __decorate([
        core_1.Input("paForOf"), 
        __metadata('design:type', Object)
    ], PaIteratorDirective.prototype, "dataSource", void 0);
    PaIteratorDirective = __decorate([
        core_1.Directive({
            selector: "[paForOf]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef, core_1.IterableDiffers, core_1.ChangeDetectorRef])
    ], PaIteratorDirective);
    return PaIteratorDirective;
}());
exports.PaIteratorDirective = PaIteratorDirective;
var PaIteratorContext = (function () {
    function PaIteratorContext($implicit, position, total) {
        this.$implicit = $implicit;
        this.position = position;
        this.setData(position, total);
        //处理属性级数据变更，单个对象的属性改变，例如价格会上升，Angular会自动处理这种变更
        // setInterval(() => {
        //     this.odd = !this.odd;
        //     this.even =!this.even;
        //     this.$implicit.price++;
        // }, 2000);
    }
    PaIteratorContext.prototype.setData = function (index, total) {
        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;
    };
    return PaIteratorContext;
}());
