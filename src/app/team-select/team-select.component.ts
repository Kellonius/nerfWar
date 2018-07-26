import { Component, OnChanges } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule } from '@angular/material/'
import { TeamColors, memberModel, teamModel, gameModeModel } from '../Models/memberModel';
import { PlayerList } from './allPlayers';

@Component({
  selector: 'teamSelect',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelect implements OnChanges {
  startGame = false;
  numberOfTeams = 2;
  eligiblePlayers = PlayerList;
  teams: teamModel[] = []
  gameMode: gameModeModel = {
    name: "Team Deathmatch",
    scoreValue: 1,
    deathTimer: 5,
    description: "Goal is to eliminate the other team members for points.",
    scoreLimit: 20,
    timeLimit: 10
  }

  constructor() {
  }
  tempTeamNumber = this.numberOfTeams;
  ngOnChanges() {
    console.log(this.numberOfTeams);
    if (this.numberOfTeams != this.tempTeamNumber) {
      this.tempTeamNumber = this.numberOfTeams;
      this.eligiblePlayers.forEach(player => {
        player.team = undefined;
      })
    }
  }

  TeamColor(teamIndex?: number): string {
    return teamIndex != undefined ? TeamColors[teamIndex] : "";
  }

  SetPlayersTeam(player) {
    if (player.team == undefined)
      player.team = 0;
    else if (player.team >= this.numberOfTeams - 1)
      player.team = undefined;
    else
      player.team += 1;
  }

  GamePreparation(): boolean {
    return !this.startGame;
  }

  StartGame() {
    // Add Teams to Team object
    this.teams = [];
    for (let i = 0; i < this.numberOfTeams; i++) {
      this.teams.push({
        name: "Team" + i + 1,
        color: TeamColors[i],
        members: []
      })
    }
    this.eligiblePlayers.forEach(player => {
      if (player.team != undefined && player.team <= this.numberOfTeams-1) {
        this.teams[player.team].members.push(player);
      }
    })
    this.startGame = true;
  }
}