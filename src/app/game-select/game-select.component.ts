import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule } from '@angular/material/'
import { TeamColors, memberModel, teamModel, gameModeModel } from '../Models/memberModel';

@Component({
  selector: 'gameSelect',
  templateUrl: './game-select.component.html',
  styleUrls: ['./game-select.component.css']
})
export class GameSelect {
  deathTimer = 5;
  scoreLimit = undefined;
  timeLimit = undefined;

  allGameModes: gameModeModel[] = [{
    name: "Team Deathmatch",
    scoreValue: 1,
    deathTimer: 5,
    description: "Teams verse until one team reaches the score limit or the team with the highest score when time runs out wins.",
    scoreLimit: 20,
    timeLimit: undefined
  },
  {
    name: "Capture the Flag",
    scoreValue: 1,
    deathTimer: 5,
    description: "Two teams verse with a clearly visible flag location. A dividing line is set between both sides. The team with the most flags captured wins.",
    scoreLimit: 5,
    timeLimit: undefined
  }
  ];

  modeSelected(gameMode: gameModeModel) {
    if (this.deathTimer > 0)
      gameMode.deathTimer = this.deathTimer;
    if (this.scoreLimit > 0)
      gameMode.scoreLimit = this.scoreLimit;
    if (this.timeLimit > 0)
      gameMode.timeLimit = this.timeLimit;
    // Send game and built teams to dashboard.
  }
}