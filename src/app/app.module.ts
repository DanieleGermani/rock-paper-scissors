import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { RpsImgComponent } from './components/rps-img/rps-img.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

import {RpsService} from './services/rps.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RpsImgComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    BrowserAnimationsModule

  ],
  providers: [RpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
