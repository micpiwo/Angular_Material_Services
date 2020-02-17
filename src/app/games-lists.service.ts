import { Injectable } from '@angular/core';
import {GamesComponent} from './games/games.component';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesListsService {

  NeoGeoGames: any = [
    {
      id: 1,
      name: 'Metal Slug',
      price: 451.15,
      stock: 'OUI'
    },

    {
      id: 2,
      name: 'Last Blad 2',
      price: 84.45,
      stock: 'NON'
    },
  ];
  constructor() { }

  getNeoGeoGames(): Observable<GamesComponent[]> {
    return of(this.NeoGeoGames);
  }
}



