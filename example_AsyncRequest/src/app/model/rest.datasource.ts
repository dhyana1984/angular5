import {Injectable,Inject,InjectionToken} from "@angular/core";
import { Http, RequestMethod, Request } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import { request } from "http";
export const REST_URL = new InjectionToken("rest_url");
@Injectable()
export class RestDataSource{
    //http对象用来完成异步请求
    //通过REST_URL令牌的服务注入地址，可以不用硬编码，而是写到配置功能模块中
    constructor(private http: Http, @Inject(REST_URL) private url:string){

    }
    getData(): Observable<Product[]>{
        //http对象有一系列http谓词方法
        //get方法返回一个rxjs的Observable<Response[]>对象，当收到服务器响应时，这个对象将发送一个事件
        //Restful服务器返回Json格式数据，使用map方法将对象执行json()方法，实现返回Observable<Product[]>对象
        //该对象最终返回给Observer。但是要注意Ovserver每调用一次subscribe方法，这里都会发送一次请求，需要考虑性能因素
        // return this.http.get(this.url).map(response => response.json());

        return this.sendRequest(RequestMethod.Get,this.url);
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

    private sendRequest(verb:RequestMethod, url: string, body?: Product) : Observable<Product>{
        //http.request方法接受一个Request对象，这个对象描述了需要发送的HTTP请求
        return this.http.request(new Request({
            method: verb,
            url: url,
            body:body
        })).map( t=> t.json());
    }
}