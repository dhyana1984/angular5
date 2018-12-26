import {Injectable} from "@angular/core";
import { P } from "@angular/core/src/render3";
export enum LogLevel{
    DEBUG,
    INFO,
    ERROR
}

@Injectable()
export class LogService{
    minimumLevel: LogLevel = LogLevel.INFO;
    logInfoMessage(message:string){
        this.logMessage(LogLevel.INFO,message);
    }
    logDebugMessage(message: string){
        this.logMessage(LogLevel.DEBUG,message);
    }
    logErrorMessage(message: string){
        this.logMessage(LogLevel.ERROR,message);
    }


    logMessage(level:LogLevel, message:string){
        if(level>= this.minimumLevel){
            console.log(`Message (${LogLevel[level]}):${message}`)
        }
    }
}