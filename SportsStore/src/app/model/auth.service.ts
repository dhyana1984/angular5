import {Injectable} from "@angular/core";
import {Observable} from "rxjs/observable";
import {RestDataSource} from "./rest.datasource";
import "rxjs/operator/map";


//创建一个服务可用于执行身份验证
@Injectable()
export class AuthService{
    constructor(private datasource:RestDataSource){

    }

    authenticate(username:string, password:string): Observable<boolean>{
        return this.datasource.authenticate(username,password);
    }

    get authenticated():boolean{
        return this.datasource.auth_token!=null;
    }

    clear(){
        this.datasource.auth_token =null;
    }
}