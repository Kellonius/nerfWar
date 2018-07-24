import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule } from '@angular/material/'
import { TeamColors, memberModel, teamModel, gameModeModel } from '../Models/memberModel';

@Component({
  selector: 'game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboard {
  gameMode: gameModeModel = {
    name: "Team Death Match",
    scoreValue: 1,
    deathTimer: 5, // Time in seconds
    description: "Team verse team. The first team to reach the score limit, or with the highest score when time runs out, wins.",
    scoreLimit: 50,
    timeLimit: 5 // Time in Minutes
  }
  title = 'Nerf War';
  teamCount = 3; // Number of teams playing
  allTeams: teamModel[] = [];
  players: memberModel[] = [
    new memberModel("player1", "Picture Here")
    ,
    new memberModel("player2", "Picture Here")
    ,
    new memberModel("player3", "Picture Here")
    ,
    new memberModel("player4", "Picture Here")
    ,
    new memberModel("player5", "Picture Here")
  ]

  constructor() {
    for (var i = 0; i < this.teamCount; i++) {
      var team: teamModel = {
        name: ("Team " + (i + 1)),
        color: TeamColors[i],
        members: JSON.parse(JSON.stringify(this.players))
      };
      this.allTeams.push(team);
    }
  }

  playerPoints(player: memberModel, increase: boolean = true) {
    var positive = increase ? 1 : -1;
    player.points += (this.gameMode.scoreValue * positive);
  }

  playerDied(player: memberModel) {
    // Set player's respawn timer.
    if (player.respawn == 0) {
      player.deaths += 1;
      player.respawn = this.gameMode.deathTimer;
      var timer = setInterval(function () {
        player.respawn -= 1;
        if (player.respawn <= 0) {
          clearInterval(timer);
          player.respawn = 0;
        }
      }, 1000)
    }
  }

  teamTotalPoints(team: teamModel) {
    var total = 0;
    team.members.forEach(player => {
      total += player.points;
    })
    return total;
  }

  teamTotalDeaths(team: teamModel) {
    var total = 0;
    team.members.forEach(player => {
      total += player.deaths;
    })
    return total;
  }
}

