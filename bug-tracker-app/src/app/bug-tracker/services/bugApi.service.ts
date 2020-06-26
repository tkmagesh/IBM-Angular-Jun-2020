import { HttpClient } from "@angular/common/http";
import { Bug } from "../models/Bug";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn : "root",
})
export class BugApiService{
    constructor(private http: HttpClient){

    }
    getAll() : Observable<Bug[]> {
        return this.http.get<Bug[]>('http://localhost:3030/bugs');
    }
}