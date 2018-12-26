import {FormControl} from "@angular/forms"

//自定义验证器，返回验证函数的工厂，参数是允许通过验证的最大值
export class LimitValidator{
    static Limit(limit:number){
        return (control:FormControl):{[key:string]:any} =>{
        let val = Number(control.value);        //获得用户输入的值
        if(val != NaN &&val>limit){             //与最大值比较，如果超过限制
            return {"limit":{"limit":limit,"actualValue":val}}; //返回当前值和限制的值
        }else{
            return null;
        }
    
    }
  }
}