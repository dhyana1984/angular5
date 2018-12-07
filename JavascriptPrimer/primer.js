console.log("Hello");
console.log("Apples");
var messageFunction = function (wether) {
    var message = "It is " + wether + " today";
    console.log(message);
};
messageFunction("raining");


//导入模块
import {Name,WeatherLocation} from "./modules/NameAndWeather";
import {Name as OtherName} from "./modules/DuplicateName";
import {TempConverter} from "./TempConverter";

// let products = [
//     { name: "Hat", price: 24.5, stock: 10 },
//     { name: "Kayak", price: 289.99, stock: 1 },
//     { name: "Soccer Ball", price: 10, stock: 0 },
//     { name: "Running Shoes", price: 116.50, stock: 20 }
// ];

// let totalValue = products
//     .filter(item => item.stock > 0)
//     .reduce((prev, item) => prev + (item.price * item.stock), 0);

// console.log("Total value: $" + totalValue.toFixed(2));

//定义对象
// let myData = new Object();
// myData.name = "Adam";
// myData.weather = "sunny";

//使用对象字面量
// let myData= {
//     name:"Adam",
//     weather:"Sunny",
//     //在对象内定义方法
//     printMessages: function(){
//         console.log("Hello "+ this.name)
//         console.log("Today is "+this.weather)
//     }
// }

// // myData.printMessages()
// // console.log("Hello "+myData.name);
// // console.log("Today is "+ myData.weather)

// //定义类
// class MyClass{
//     constructor(name, weather){
//         this.name = name;
//         // this.weather = weather;
//         this._weather = weather
//     }
//     //设置属性
//     set weather(value){
//         this._weather = value;
//     }
//     //读取属性
//     get weather(){
//         return `Today is ${this._weather}`;
//     }

//     printMessages(){
//         console.log("Hello "+ this.name)
//         console.log("Today is "+this.weather)
//     }
// }

// //继承父类
// class MySubClass extends MyClass{
//     constructor(name, weather, city){
//         super(name,weather); //super调用父类构造函数
//         this.city =city;
//     }

//     printMessages(){
//         super.printMessages();
//         console.log(`You are in ${this.city}`)
//     }
// }


// let myData = new MySubClass("Adam","sunny","London");
// myData.printMessages();



let name = new Name("Adam","Freeman");
let loc = new WeatherLocation("raining","London");
let other = new OtherName();
let cTemp = TempConverter.convertFtoC(38)
// console.log(name.nameMessage)
// console.log(loc.weatherMessage)
// console.log(other.message)

let tuple : [string, string,string]
tuple =["London","raining",TempConverter.convertFtoC("38")]
// console.log(`The temp is ${cTemp}C`)
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

//使用可索引类型，类似map
let cities:{[index:string]:[string,string]} = {}
cities["London"]= ["raining", TempConverter.convertFtoC("38")];
cities["Paris"]= ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"]= ["sowning", TempConverter.convertFtoC("23")];

for(let key in cities){
    console.log(`${key}:${cities[key][0]}, ${cities[key][1]}`)
}