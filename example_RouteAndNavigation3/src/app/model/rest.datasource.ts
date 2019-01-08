import {Injectable,Inject,InjectionToken} from "@angular/core";
import { Http, RequestMethod, Request, Jsonp, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/delay";
export const REST_URL = new InjectionToken("rest_url");
@Injectable()
export class RestDataSource{
    //http对象用来完成异步请求
    //通过REST_URL令牌的服务注入地址，可以不用硬编码，而是写到配置功能模块中
    constructor(private http: Http, @Inject(REST_URL) private url:string, private jsonp: Jsonp){

    }
    getData(): Observable<Product[]>{
        //http对象有一系列http谓词方法
        //get方法返回一个rxjs的Observable<Response[]>对象，当收到服务器响应时，这个对象将发送一个事件
        //Restful服务器返回Json格式数据，使用map方法将对象执行json()方法，实现返回Observable<Product[]>对象
        //该对象最终返回给Observer。但是要注意Ovserver每调用一次subscribe方法，这里都会发送一次请求，需要考虑性能因素
        // return this.http.get(this.url).map(response => response.json());

        //使用http.request方法发送请求
        return this.sendRequest(RequestMethod.Get,this.url);

        //使用Jsonp
        // return this.jsonp.get(this.url + "?callback=JSONP_CALLBACK").map(t=>t.json());
    }

    saveProduct(product:Product): Observable<Product>{
        // return this.http.post(this.url,product).map(t => t.json());

       return  this.sendRequest(RequestMethod.Post,this.url,product);
    }

    updateProduct(product: Product):Observable<Product>{
        // return this.http.put(`${this.url}/${product.id}`,product).map(t=>t.json());

        return this.sendRequest(RequestMethod.Put,`${this.url}/${product.id}`,product)
    }

    deleteProduct(id: number){
        // return this.http.delete(`${this.url}/${id}`).map(t => t.json());

        return this.sendRequest(RequestMethod.Delete,`${this.url}/${id}`);
    }

    private sendRequest(verb:RequestMethod, url: string, body?: Product) {
        let headers = new Headers();
        headers.set("Access-Key","<secret>");
        headers.set("Application-Name",["exampleApp","proAngular"]);//header的属性可以设置多个值
        //http.request方法接受一个Request对象，这个对象描述了需要发送的HTTP请求
        return this.http.request(new Request({
            method: verb,
            url: url,
            body:body,
            //直接设置header
            // headers: new Headers({
            //     "Access-Key": "<secret>",
            //     "Application-Name": "exampleApp"
            // })
            headers:headers
        })).delay(2000)
        .map( t=> t.json())
        //使用Observable的catch和throw对象来处理错误
        .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
       
    }
}