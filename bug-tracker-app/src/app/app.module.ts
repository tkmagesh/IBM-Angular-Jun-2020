import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';
import { ElapsedPipe } from "./bug-tracker/pipes/elapsed.pipe";
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperationsService } from './bug-tracker/services/bugOperations.service'
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

import { BugStatsComponent } from './bug-tracker/views/bugStats.component';
import { BugEditComponent } from "./bug-tracker/views/bugEdit.component";
@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , TrimTextPipe
    , SortPipe
    , ElapsedPipe
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
