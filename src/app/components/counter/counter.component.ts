import { Component, OnInit,Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [
    trigger('countdown', [
      transition('* => *', [
        style({
          transform: 'scale(1)',
          opacity: 1
        }),
        animate('1s ease', style({
          transform: 'scale(4)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class CounterComponent {

  @Input()
  value: number;

}
