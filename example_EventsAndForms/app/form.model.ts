import {FormControl, FormGroup, Validator, Validators} from "@angular/forms"
import {LimitValidator} from "./limit.formvalidators"

export class ProductFormControl extends FormControl{
    label: string;
    modelProperty:string;
    constructor(label:string, property:string,value:any, validator:any){
        super(value,validator);
        this.label = label;
        this.modelProperty = property;
    }

    //将模型验证消息放到表单模型类中
    getValidationMessages(){
        let message: string[] = []
        if(this.errors){
            for(let errorName in this.errors){
                switch(errorName){
                    case "required":
                    message.push(`You must enter a ${this.label}`);
                    break;

                    case "minlength":
                    message.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength}`)
                    break;

                    case "maxlength":
                    message.push(`A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength}`)
                    break;

                    case "pattern":
                    message.push(`The ${this.label} contains illegal characters`);
                    break;

                    case "limit":
                    message.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}`)
                }
            }
        }
        return message;
    }
}

export class ProductFormGroup extends FormGroup{

    constructor(){
        super({
            name:  new ProductFormControl("Name","name","", Validators.required),
            category: new ProductFormControl("Category","category","", Validators.compose([Validators.required,
                                                                                           Validators.pattern("^[A-Za-z ]+$"),
                                                                                           Validators.minLength(3),
                                                                                          Validators.maxLength(10)])),
            price:new ProductFormControl("Price","price","", Validators.compose([Validators.required,
                                                                                 LimitValidator.Limit(100), //调用自定义的验证组件
                                                                                 Validators.pattern("^[0-9\.]+$")]))
        });
    }


    get ProductControls():ProductFormControl[]{
        return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
    }
    //将表单验证信息放到表单类中
    getFormValidationMessages(form:any):string[]{
        let messages :string[]= [];
        this.ProductControls.forEach(t =>{
            t.getValidationMessages().forEach( m=> messages.push(m));
        });
        return messages;
    }


}