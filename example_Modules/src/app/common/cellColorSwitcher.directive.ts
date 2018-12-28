import { Directive, Input, Output, EventEmitter, SimpleChange, ContentChild, ContentChildren, QueryList} from "@angular/core";
import{PaCellColor} from "./cellColor.directive";

@Directive({
    selector: "table"
})
export class PaCellColorSwitcher{

    @Input("PaCellDarkColor")
    modelProperty:boolean;

    //告诉Angular该指令需要查询宿主元素的内容，并将查询到的第一个结果赋给该属性
    //@ContentChild的参数是一个或多个指令类，
    //表示要找到包含在宿主元素内容中的第一个PaCellColor对象，并将其赋给被装饰属性contentChild
    // @ContentChild(PaCellColor) 
    // contentChild:PaCellColor;

    //@ContentChildren是把包含在宿主元素中所有的PaCellColor对象赋给被装饰属性contentChildren
    @ContentChildren(PaCellColor)
    //QueryList有changes方法，返回一个Reactiver Extension Observable对象
    //该对象定义了一个subscribe方法，该方法接受一个函数当参数
    //当QueryList的内容改变，调用该函数。实际上这个接受的函数是一个回调
    contentChildren:QueryList<PaCellColor>;

    ngOnChanges(changes:{[property:string]: SimpleChange}): void {
        // if(this.contentChild != null){
        //     //访问子组件，允许调用setColor,将第一个PaCellColor的对象使用setColor方法
        //     // this.contentChild.setColor(changes["modelProperty"].currentValue);
        // }

        this.updateContentChildren(changes["modelProperty"].currentValue)
        
    }

    ngAfterContentInit(): void {
        //subscribe的参数的这个函数需要在setTimeout中调用
        //因为延迟执行回调函数，知道subscribe完成
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.modelProperty),0)
        })
        
    }

    private updateContentChildren(dark: boolean){
        if(this.contentChildren != null && dark != undefined){
            this.contentChildren.forEach((child,index)=>{
                child.setColor(index%2 ? dark:!dark);
            })
        }
    }
}