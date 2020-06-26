import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilsModule } from "../utils/utils.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

//refactor the below into BugTrackerModule
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperationsService } from './bug-tracker/services/bugOperations.service'
import { BugStorageService } from './bug-tracker/services/bugStorage.service';

import { BugStatsComponent } from './bug-tracker/views/bugStats.component';
import { BugEditComponent } from "./bug-tracker/views/bugEdit.component";

import { environment } from "../environments/environment";
import { SERVICE_ENDPOINT, BugApiService } from './bug-tracker/services/bugApi.service';

const serviceEndPoint : string = environment.serviceEndPoint;

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    { provide: BugOperationsService, useClass: BugOperationsService},
    { provide: SERVICE_ENDPOINT, useValue: environment.serviceEndPoint},
    BugApiService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
