import { trigger, state, animate,transition,style,group } from "@angular/core";
import { getStylesFromClasses } from "./animationUtils";

const commonStyles={
    border:"black solid 4px",
    color:"white"
};
//trigger是定义动画触发器，并指派了一个名称
//在html中以[@rowHighlight]="xx"绑定
export const HighlightTrigger = trigger("rowHighlight",[
    //style是样式分组，
    //state定义元素状态， 告诉Angular何时为一个元素应用一组样式，元素状态提供了一个名称，通过这个名称可以引用样式集合。
    //可以通过state函数来创建元素状态，第一个参数是状态名称，第一个参数是样式集合
    // state("selected", style({
    //     //也可以用background-color的css约定，最好保持一致
    //     backgroundColor:"lightgreen",
    //     fontSize:"20px"
    // })),
    //commonStyles定义公共样式
    //     state("selected", style([commonStyles,{
    //     //也可以用background-color的css约定，最好保持一致
    //     backgroundColor:"lightgreen",
    //     fontSize:"20px"
    // }])),
    state("selected", style(getStylesFromClasses(["bg-success", "h2"]))),
    // state("notselected",style([commonStyles,{
    //     backgroundColor:"lightsalmon",
    //     fontSize:"12px",
    //     color:"black"
    // }])),
    state("notselected",style(getStylesFromClasses("bg-info"))),
     //*代表没有运用动画状态时候的状态,
    // state("*",style({
    //     border:"solid black 2px"
    // })),
    //void表示不显示时候的状态,例如ngIf=false时候
    state("void",style({
        // opacity:0
        transform:"translateX(-50%)"//transform是改变形状的变形，例如反转，缩放等
    })),
    //定义状态迁移
    //当一个html元素处于用state函数创建的某个状态时，Angular将该状态的样式分组中应用css属性
    //transition函数用于告知Angular应该如何应用新的css属性。第一个参数告知Angular这个指令应用于哪些状态，=>表示两个状态之间关系
    //=>表示从一个状态迁移到另一个状态，<=>表示两个状态双向迁移
    //transition函数第二个参数指定要做什么动作, animate函数表示是要过渡进行，传给animate的是过渡所需时间
    transition("* <=> notselected",animate("200ms")), //从任何状态跳回初始状态就有了动画效果
    // transition("* <=> selected", animate("400ms 200ms ease-in")),//200ms表示延时
    //使用多个动画,group可以让动画并行执行
    transition("* <=> selected", 
        [animate("400ms 200ms ease-in", style({
        backgroundColor:"lightblue",
        fontSize:"25px"
    })),
        group([
            animate("250ms",style({
                backgroundColor:"lightcoral"
            })),
            animate("450ms", style({
                fontSize:"30px"
                })),
        ]),

        animate("200ms")]
        ),
    transition("void => *", animate("500ms")), //刚刚加载页面会有动画效果，从不显示到初始状态跃迁 :enter表示void=>*, :leave表示*=>void

])