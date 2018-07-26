import { Component, Input, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule, MatDividerModule } from '@angular/material/'
import { TeamColors, memberModel, teamModel, gameModeModel } from '../Models/memberModel';

@Component({
  selector: 'game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboard implements OnInit {
  @Input() allTeams: teamModel[] = [];
  @Input() gameMode: gameModeModel = {
    name: "Team Death Match",
    scoreValue: 1,
    deathTimer: 5, // Time in seconds
    description: "Team verse team. The first team to reach the score limit, or with the highest score when time runs out, wins.",
    scoreLimit: 50,
    timeLimit: 5 // Time in Minutes
  }
  title = 'Nerf War';
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

  constructor() { }

  ngOnInit() {
    if (this.allTeams.length <= 0) {
      for (var i = 0; i < 2; i++) {
        var team: teamModel = {
          name: ("Team " + (i + 1)),
          color: TeamColors[i],
          members: JSON.parse(JSON.stringify(this.players))
        };
        this.allTeams.push(team);
      }
    }
    console.log(this.allTeams);
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

  teamBoardHeights() {
    return 98 / this.allTeams.length;
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

