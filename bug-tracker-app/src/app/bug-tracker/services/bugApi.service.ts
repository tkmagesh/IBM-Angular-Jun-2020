import { HttpClient } from "@angular/common/http";
import { Bug } from "../models/Bug";
import { Injectable, InjectionToken, Inject } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable()
export class BugApiService{

    constructor(private http: HttpClient, 
        @Inject(SERVICE_ENDPOINT) private serviceEndPoint: string){

    }
    getAll() : Observable<Bug[]> {
        return this.http.get<Bug[]>(this.serviceEndPoint);
    }

    get(id: number) : Observable<Bug> {
        return this.http.get<Bug>(`${this.serviceEndPoint}/${id}`);
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.http.post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.http.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }

    remove(bugData : Bug) : Observable<any>{
        return this.http.delete<any>(`${this.serviceEndPoint}/${bugData.id}`);
    }

}

export const SERVICE_ENDPOINT : InjectionToken<string> 
    = new InjectionToken<string>('serviceEndPoint');