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
    

    constructor(
        private bugOperations : BugOperationsService
    ){

    }
    ngOnInit(){
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    onNewBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onRemoveClick(bugToRemove: Bug){
        this.bugOperations
            .remove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug !== bugToRemove)
            });
        
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
        
    }

    onRemoveClosedClick(){
        const closedBugs = this.bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(closedBug => this.onRemoveClick(closedBug));
    }

}