import { Injectable } from "@angular/core";

@Injectable()
export class LoadGuard{
    private loaded: boolean = false;
}