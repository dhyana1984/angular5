import { Component } from "@angular/core";

//这个组件用一个内联模板来显示一条消息，用于提示路由系统选中了哪个组件
@Component({
    selector:"first",
    template:`<div class="bg-primary p-a-1">First Component</div>`
})
export class FirstComponent{

}