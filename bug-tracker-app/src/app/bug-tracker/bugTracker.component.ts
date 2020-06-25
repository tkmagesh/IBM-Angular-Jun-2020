import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl: 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit {
    bugs: Bug[] = [];
    sortAttr : string = 'id';
    isDesc : boolean = false;
    newBugName : string = '';

    constructor(private bugOperations : BugOperationsService){

    }
    ngOnInit(){
        this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()});
        this.bugs.push({ id: 4, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date() });
        this.bugs.push({ id: 3, name: 'User actions not recognized', isClosed: true, createdAt: new Date() });
        this.bugs.push({ id: 2, name: 'Application not responding', isClosed: false, createdAt: new Date() });
    }

    onAddNewClick(){
        const newBug : Bug = this.bugOperations.createNew(this.newBugName);
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0)
    }
}