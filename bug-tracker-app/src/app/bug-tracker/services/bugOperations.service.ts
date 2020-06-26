import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { BugApiService } from "./bugApi.service";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
@Injectable()
export class BugOperationsService{
    constructor(
        private bugStorage : BugStorageService,
        private bugApi  : BugApiService
    ){ 

    }
    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }
    
    createNew(bugName : string){
        const newBugData : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBugData);
    }
    toggle(bugToToggle : Bug){
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugStorage.save(toggledBug);
    }

    remove(bug : Bug){
        return this.bugStorage.remove(bug);
    }
}