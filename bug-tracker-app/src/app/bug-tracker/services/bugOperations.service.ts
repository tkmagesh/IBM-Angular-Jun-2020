import { Bug } from '../models/Bug';

export class BugOperationsService{
    createNew(bugName : string){
        const newBug : Bug = {
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