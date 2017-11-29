import { Injectable } from '@angular/core';
import {RockPaperScissors} from '../enum/rps.enum';

@Injectable()
export class RpsService {

  doesBeat(player1: RockPaperScissors, player2: RockPaperScissors){
    if(player1 === player2)
      return null;
    return player1 == (((player2 + 1) % 3) || 3);
  }

}
