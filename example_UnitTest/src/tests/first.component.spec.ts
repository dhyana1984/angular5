import { TestBed, ComponentFixture,async } from "@angular/core/testing";
import { FirstComponent } from "app/ondemand/first.component";
import { Product } from "app/model/product.model";
import { Model } from "app/model/repository.model";
import { DebugElement, Component, ViewChild } from "@angular/core";
import { By } from "@angular/platform-browser";
@Component({
    template: `<first [pa-model]="model"></first>`
})
class TestComponent{
    constructor(public model:Model){

    }
    @ViewChild(FirstComponent)
    firstComponent: FirstComponent;
}
describe("FirstComponent", () =>{
    //ComponentFixture<FirstComponent>对象为测试组件提供了功能支持
    let fixture:ComponentFixture<FirstComponent>;
    let fixtureTestComponent : ComponentFixture<TestComponent>;
    let component: FirstComponent;
    let componentTestComponent: FirstComponent;
    let debugElementTestComponent:DebugElement
    let debugElement:DebugElement;
    let bindingElement:HTMLSpanElement;
    let spanElement:HTMLSpanElement;
    let divElement:HTMLDivElement;
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
    beforeEach( async(() => {
        //TestBed是Angular单元测试的核心， 负责模拟Angular的环境。TestBed在beforeEach中使用，否则会报错
        //configureTestingModule方法用于配置Angular测试模块
        TestBed.configureTestingModule({
            declarations:[FirstComponent,TestComponent],
            providers:[
                {provide:Model,useValue:mockRepository}
            ]
        });
        // //createComponent方法的参数可以告知TestBed应该实例化哪一种组件类型
        // fixture = TestBed.createComponent(FirstComponent);
        // //ComponentFixture.componentInstance返回组件对象
        // component = fixture.componentInstance;
        // //ComponentFixture.debugElement属性返回一个DebugElement对象，这个DebugElement对象表示来自组件模板的根元素
        // debugElement= fixture.debugElement;
        // //debugElement.query方法查找debugElement中的元素
        // //By.css使用CSS选择器查找
        // //debugElement.query(By.css("span")).nativeElement就是使用By.css方法来查找模板中的第一个span元素
        // //并通过nativeElement属性来访问代表这个span元素的DOM对象,即debugElement.nativeElement
        // bindingElement = debugElement.query(By.css("span")).nativeElement;
        //使用TestBed.compileComponents方法编译组件，并且在beforeEach用了async异步编译方法
        //compileComponents会返回一个Promise，因为在编译结束时必须使用这个Promise来完成测试设置
        TestBed.compileComponents().then(() =>{
            fixture = TestBed.createComponent(FirstComponent);
            fixtureTestComponent = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            componentTestComponent = fixtureTestComponent.componentInstance.firstComponent;
            debugElement= fixture.debugElement;
            debugElementTestComponent = fixtureTestComponent.debugElement.query(By.directive(FirstComponent));
            spanElement = debugElement.query(By.css("span")).nativeElement;
            divElement = debugElement.children[0].nativeElement;
            
        });
    }));
    it("is defined", () =>{
        //使用componentInstance属性来获取测试床所创建的FirstComponent类型对象，并执行toBeDefined来测试是否正确创建
        expect(component).toBeDefined();
    })
    //测试定义不同category时getProducts().length得到不同数字
    it("filter categories", () =>{
        // component.category = "Chess"
        // //每次category属性发生改变时，需要调用fixture.detectChanges()方法
        // //这个方法要求Angular测试环境处理所有的变更，并对模板中的数据绑定表达式进行求值
        // //如果没有调用这个方法，那么队组建category属性所做的修改无法再模板中反映
        // fixture.detectChanges();
        // //测试组件的方法
        // expect(component.getProducts().length).toBe(1);
        // //测试模板中的绑定值
        // expect(bindingElement.textContent).toContain("1");
        // component.category = "Soccer"
        // fixture.detectChanges();
        // expect(component.getProducts().length).toBe(2);
        // expect(bindingElement.textContent).toContain("2");
        // component.category = "Running"
        // fixture.detectChanges();
        // expect(component.getProducts().length).toBe(0);
        // expect(bindingElement.textContent).toContain("0");


    })
    it("componment with template", () =>{
        // //测试带有外部模板的组件
        // component.category= "Chess";
        // fixture.detectChanges();
        // expect(component.getProducts().length).toBe(1);
        // expect(spanElement.textContent).toContain("1")
    })
     //测试组件的事件
    it("handles mouse events" ,()=>{
               
        //toBeFalsy表示断言结果为假
        expect(component.highlighted).toBeFalsy();
        expect(divElement.classList.contains("bg-success")).toBeFalsy();
        //debugElement.triggerEventHandler触发事件mouseenter
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        fixture.detectChanges();
        //toBeTruthy断言结果为真
        expect(component.highlighted).toBeTruthy();
        expect(divElement.classList.contains("bg-success")).toBeTruthy();
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        fixture.detectChanges();
        expect(component.highlighted).toBeFalsy();
        expect(divElement.classList.contains("bg-success")).toBeFalsy();
    })
    //测试输出属性
    it("implements output property", () =>{
        let highlighted:boolean;
        component.change.subscribe(value => highlighted = value);
        debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
        expect(highlighted).toBeTruthy();
        debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
        expect(highlighted).toBeFalsy();
    }) 

    //测试输入属性
    it("receives the model through an input property", () => {
        componentTestComponent.category="Chess";
        fixtureTestComponent.detectChanges();
        let products = mockRepository.getProducts().filter(t => t.category == componentTestComponent.category);
        let componentProducts = componentTestComponent.getProducts();
        for(let i =0 ; i< componentProducts.length; i++){
            expect(componentProducts[i]).toEqual(products[i]);
        }
        expect(debugElementTestComponent.query(By.css("span")).nativeElement.textContent).toContain(products.length);
    })
})