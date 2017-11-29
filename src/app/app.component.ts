import { Component } from '@angular/core';
import { GameState } from './enum/game-state.enum';
import { RockPaperScissors } from './enum/rps.enum';
import * as Rx from 'rxjs';
import { RpsService } from './services/rps.service';

enum GameResult {
  Win,
  Loss,
  Draw
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RpsService]
})
export class AppComponent {
  GameState = GameState;
  RockPaperScissors = RockPaperScissors;
  GameResult = GameResult;
  playerOptions = Object.keys(RockPaperScissors).map(x => parseInt(x)).filter(x => x >= 0);

  state = {
    gameState: GameState.Waiting,
    countdownTimer: 0,
    opponentItem: <RockPaperScissors>null,
    playerItem: <RockPaperScissors>null,
    score: {
      player: 0,
      opponent: 0
    },
    lastGameResult: <GameResult>null
  };
  constructor(private rpsService : RpsService){
  }
  start() {
  Object.assign(this.state, {
    gameState: GameState.Countdown,
    opponentItem: null,
    playerItem: null,
    countdownTimer: 0
  });

  Rx.Observable
    .interval(1000)
    .map(i => 2 - i)
    .startWith(3)
    .take(4)
    .subscribe(
      i => this.state.countdownTimer = i,
      err => console.log(err),
      () => {
        this.state.gameState = GameState.Playing;
      }
    );
}

selectPlayerItem(selected : RockPaperScissors) {
  let opponentItem = <RockPaperScissors>(Math.floor(Math.random() * 3) + 1);
  this.state.opponentItem = opponentItem;
  this.state.playerItem = selected;
  let playerWins = this.rpsService.doesBeat(selected, opponentItem);
  if(playerWins) {
    this.state.lastGameResult = GameResult.Win;
    this.state.score.player++;
  } else if(playerWins === false) {
    this.state.lastGameResult = GameResult.Loss;
    this.state.score.opponent++;
  } else {
    this.state.lastGameResult = GameResult.Draw;
  }
}

}
