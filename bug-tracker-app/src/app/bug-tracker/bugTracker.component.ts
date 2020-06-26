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
    

    constructor(private bugOperations : BugOperationsService){

    }
    ngOnInit(){
        this.bugs = this.bugOperations.getAll();
       /*  this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()});
        this.bugs.push({ id: 4, name: 'Data integrity checks failed', isClosed: true, createdAt: new Date() });
        this.bugs.push({ id: 3, name: 'User actions not recognized', isClosed: true, createdAt: new Date() });
        this.bugs.push({ id: 2, name: 'Application not responding', isClosed: false, createdAt: new Date() }); */
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