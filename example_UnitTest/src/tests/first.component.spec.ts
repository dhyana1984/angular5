import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FirstComponent } from "app/ondemand/first.component";
import { Product } from "app/model/product.model";
import { Model } from "app/model/repository.model";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("FirstComponent", () =>{
    //ComponentFixture<FirstComponent>对象为测试组件提供了功能支持
    let fixture:ComponentFixture<FirstComponent>;
    let component: FirstComponent;
    let debugElement:DebugElement;
    let bindingElement:HTMLSpanElement;
    let mockRepository={
        getProducts: function(){
            return [
                new Product(1,"test1","Soccer",100),
                new Product(2,"test2","Chess",100),
                new Product(3,"test3","Soccer",100),
            ]
        }
    }
    //beforeEach指定一个任务，每次单元测试执行之前执行这个任务
    beforeEach(() => {
        //TestBed是Angular单元测试的核心， 负责模拟Angular的环境。TestBed在beforeEach中使用，否则会报错
        //configureTestingModule方法用于配置Angular测试模块
        TestBed.configureTestingModule({
            declarations:[FirstComponent],
            providers:[
                {provide:Model,useValue:mockRepository}
            ]
        });
        //createComponent方法的参数可以告知TestBed应该实例化哪一种组件类型
        fixture = TestBed.createComponent(FirstComponent);
        //ComponentFixture.componentInstance返回组件对象
        component = fixture.componentInstance;
        //ComponentFixture.debugElement属性返回一个DebugElement对象，这个DebugElement对象表示来自组件模板的根元素
        debugElement= fixture.debugElement;
        //debugElement.query方法查找debugElement中的元素
        //By.css使用CSS选择器查找
        //debugElement.query(By.css("span")).nativeElement就是使用By.css方法来查找模板中的第一个span元素
        //并通过nativeElement属性来访问代表这个span元素的DOM对象,即debugElement.nativeElement
        bindingElement = debugElement.query(By.css("span")).nativeElement;
    });
    it("is defined", () =>{
        //使用componentInstance属性来获取测试床所创建的FirstComponent类型对象，并执行toBeDefined来测试是否正确创建
        expect(component).toBeDefined();
    })
    //测试定义不同category时getProducts().length得到不同数字
    it("filter categories", () =>{
        component.category = "Chess"
        //每次category属性发生改变时，需要调用fixture.detectChanges()方法
        //这个方法要求Angular测试环境处理所有的变更，并对模板中的数据绑定表达式进行求值
        //如果没有调用这个方法，那么队组建category属性所做的修改无法再模板中反映
        fixture.detectChanges();
        //测试组件的方法
        expect(component.getProducts().length).toBe(1);
        //测试模板中的绑定值
        expect(bindingElement.textContent).toContain("1");
        component.category = "Soccer"
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(2);
        expect(bindingElement.textContent).toContain("2");
        component.category = "Running"
        fixture.detectChanges();
        expect(component.getProducts().length).toBe(0);
        expect(bindingElement.textContent).toContain("0");
    })
})