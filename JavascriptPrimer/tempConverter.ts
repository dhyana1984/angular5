export class TempConverter{
    //参数注解和返回值注解
    //<number>temp 这是一个断言，可以换成temp as number
    //除了使用(temp :number | string)联合类型，还可以使用temp:any然后下方法内判断
    static convertFtoC(temp :number | string) : string{
        let value:number = (<number>temp).toPrecision? <number>temp : parseFloat(<string>temp);
        return ((parseFloat(value.toPrecision(2)) -32) / 1.8).toFixed(1)
    }


}