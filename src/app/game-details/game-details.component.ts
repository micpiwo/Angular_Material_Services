import { Component, OnInit, Input } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import {GamesListsService} from '../games-lists.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {


  @Input() sega: GamesComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
