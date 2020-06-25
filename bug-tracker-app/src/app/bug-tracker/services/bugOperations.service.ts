import { Bug } from '../models/Bug';

export class BugOperationsService{
    private currentBugId : number = 0;
    createNew(bugName : string){
        const newBug : Bug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }
    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}