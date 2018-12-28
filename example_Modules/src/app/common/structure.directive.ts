import{
    Directive, SimpleChange,ViewContainerRef, TemplateRef, Input
} from "@angular/core";

@Directive({
    selector: "[paIf]" //表示用于匹配具有paIf属性的宿主元素
})
export class PaStructureDirective{
    //该构造函数表明这是一个结构型指令
    //ViewContainerRef用于管理视图容器，template出现的地方该指令负责这块内容,表示template在html中占用的地方
    //TempateRef表示template的内容
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>){

    }

    //如果不定义showTable，一开始表格不会显示，因为指令表达式是以前从未定义的一个变量
    //这里显示定义变量了，给予false初始值
    showTable:boolean = false; 
    @Input("paIf")
    expressionResult: boolean;//接受表达式结果，实现ngOnChanges方法

    ngOnChanges(changes:{[property:string]: SimpleChange}): void {
       //接受SimpleChange对象，根据表达式的值显示或隐藏template的内容
        let change = changes["expressionResult"];
        if(!change.isFirstChange() && !change.currentValue){
            this.container.clear();
        }else if(change.currentValue){
            //此方法是向用户显示template的内容，属于ViewContainerRef类
            this.container.createEmbeddedView(this.template);
        }
        
    }
}