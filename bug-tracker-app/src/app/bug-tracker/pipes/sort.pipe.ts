import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (p1: any, p2: any): number
}

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform {

    private negateComparer(comparer : Comparer) : Comparer {
        return function (p1 : any, p2 : any) : number {
            return comparer(p1, p2) * -1;
        }
    }
    private getComparerFor(attrName : string, isDesc : boolean = false) : Comparer {
        const comparer = function (p1 : any, p2 : any) : number {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] === p2[attrName]) return 0;
            return 1;
        }
        if (!isDesc ) return comparer;
        return this.negateComparer(comparer);
    }
    
    transform(list : any[], attrName : string, isDesc : boolean = false) : any[] {
        /* console.log('sort.transform triggered'); */
        if (!list || !list.length || !attrName) return list;
        let comparer = this.getComparerFor(attrName, isDesc);
        return list.sort(comparer);
    }
}