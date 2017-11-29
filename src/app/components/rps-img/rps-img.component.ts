import { Component,Input } from '@angular/core';
import {RockPaperScissors} from '../../enum/rps.enum';

@Component({
  selector: 'app-rps-img',
  templateUrl: './rps-img.component.html',
  styleUrls: ['./rps-img.component.css']
})
export class RpsImgComponent  {

  @Input()
    option : RockPaperScissors;

    getImageUrl(){
      let root = 'assets/images/';
      if(this.option === null)
        return root + 'question.png';
      return `${root}${RockPaperScissors[this.option].toLowerCase()}.png`;
    }

}
