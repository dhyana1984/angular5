import  {Directive,ElementRef,Attribute,Input, SimpleChange,
        Output,EventEmitter,HostBinding,HostListener} from "@angular/core"
import {Product} from "./product.model"


@Directive({
    selector:"[pa-attr]"
})//该指令的目的是把所有有pa-attr属性的元素添加bg-success class
export class PaAttrDirective{
    //当Angular创建指令类的新实例时，应该使用属性为构造函数提供参数
    //Angular为每个与选择器匹配的元素分别创建一个新的装饰器实例，
    //并使用这些元素的属性为指令构造函数中带有@Attribute装饰器的参数提供值
    constructor(private element:ElementRef
        //, @Attribute("pa-attr") bgClass:string//ElementRef是表示宿主元素，pa-attr复用了，@Attribute用来读取属性的值
                ){
        // element.nativeElement.classList.add(  bgClass || "bg-success"); //使用@Input定义输入属性并设置是在创建指令实例之后，
                                                                           //所以要把这里的内容写到ngOnInit方法，称为生命周期钩子方法
        // this.element.nativeElement.addEventListener("click" , e =>{ //设置DOM事件的侦听器
        //     if(this.product != null){
        //         this.click.emit(this.product.category)//使用EventEmitter对象的emit方法来发送事件，参数是希望事件侦听器接收到的值
        //     }
        // })
    
    }
    //输入指令
    @Input("pa-attr")
    //用于在宿主元素上设置属性绑定，并应用于指令属性，
    //即绑定了class属性和bgClass，使用宿主元素可以删除构造函数，不需要通过ElementRef访问html元素
    @HostBinding("class")
    bgClass:string;

    @Input("pa-product")
    product:Product;

    //输出指令，指定类的EventEmitter属性与模板事件绑定中使用的事件名称之间建立映射, 点击某一行，该产品的category会显示在input
    @Output("pa-category")
    click=new EventEmitter<string>();//EventEmitter为Angular提供了事件机制

    @HostListener("click")//用于在宿主元素上设置事件绑定，并应用于指令方法，为click事件创建了一个事件绑定，点击鼠标调用triggerCustomEvent方法
    triggerCustomEvent(){
        if(this.product != null){
            this.click.emit(this.product.category)
        }
    }
    //使用ngOnchanges方法目的是重新进行表达式求值并更新输入属性时，该指令将进行响应
    ngOnChanges(changes: {[Property:string]:SimpleChange}): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        let change = changes["bgClass"];
        let classList = this.element.nativeElement.classList;
        //当响应输入属性值的变化时，指令必须确保撤销先前更新的影响，从previous类中删除元素
        //isFirstChange()可以不撤销实际并未应用的值，首次将值赋给输入属性时，也会调用onChanges方法
        if(!change.isFirstChange() && classList.contains(change.previousValue)){
            classList.remove(change.previousValue);
        }

        //将元素添加到currentValue类
        if(!classList.contains(change.currentValue)){
            classList.add(change.currentValue);
        }
        
    }

    ngOnInit(): void { 
     //设置输入属性后，必须要把构造函数的方法写在设立，因为设置输入属性时在创建指令实例之后执行，
        this.element.nativeElement.classList.add(this.bgClass || "bg-siccess")
    }
}