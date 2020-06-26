import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { HttpClient } from "@angular/common/http";

@Component({
    selector : 'app-bug-tracker',
    templateUrl: 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit {
    bugs: Bug[] = [];
    sortAttr : string = 'id';
    isDesc : boolean = false;
    

    constructor(
        private bugOperations : BugOperationsService
        , private httpClient : HttpClient
    ){

    }
    ngOnInit(){
        //this.bugs = this.bugOperations.getAll();
        
        const x = this.httpClient.get<Bug[]>('http://localhost:3030/bugs');
        x.subscribe( bugs => this.bugs = bugs);
            
    }

    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugOperations.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onBugNameClick(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        const closedBugs = this.bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(closedBug => this.onRemoveClick(closedBug));
    }

}