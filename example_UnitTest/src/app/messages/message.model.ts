export class Message{
    constructor(private text: string, 
        private error: boolean=false,
        //response包含用户提示以及回调函数，
        //这是一个元组，第一个值是向用户呈现的相应名称，第二个值是回调函数，函数名称作为参数传递给自身
        private response? : [[string, (string)=>void]]){

    }
}