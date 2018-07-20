import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule, MatDividerModule} from '@angular/material/'
import { memberModel } from './Models/memberModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nerf War';
  players: memberModel[] = [{
    name: "player1",
    image: "string",
    points: 0,
    respawn: 0
  },{
    name: "player2",
    image: "string",
    points: 0,
    respawn: 0
  },{
    name: "player3",
    image: "string",
    points: 0,
    respawn: 0
  },{
    name: "player4",
    image: "string",
    points: 0,
    respawn: 0
  },{
    name: "player5",
    image: "string",
    points: 0,
    respawn: 0
  }]


}

