import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule, MatToolbarModule } from '@angular/material/'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { GameDashboard } from './game-dashboard/game-dashboard.component';
import { GameSelect } from './game-select/game-select.component';
import { TeamSelect } from './team-select/team-select.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDashboard,
    GameSelect,
    TeamSelect
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    MatDividerModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
