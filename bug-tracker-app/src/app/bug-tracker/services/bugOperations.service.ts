import { Bug } from '../models/Bug';
import { BugApiService } from "./bugApi.service";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class BugOperationsService{
    constructor(
        private bugApi  : BugApiService
    ){ 

    }
    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(bugName : string) : Observable<Bug>{
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBugData);
    }
    toggle(bugToToggle : Bug) : Observable<Bug>{
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugApi.save(toggledBug);
    }

    remove(bug : Bug) : Observable<any>{
        return this.bugApi.remove(bug);
    }
}