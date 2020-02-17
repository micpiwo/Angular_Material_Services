import { Component, OnInit } from '@angular/core';
import { GamesListsService } from '../games-lists.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  Games: any = [

    {
      id: 1,
      name: 'Mario Bros',
      price: 15.25,
      stock: 'OUI'
    },
    {
      id: 2,
      name: 'Metroid',
      price: 250.65,
      stock: 'NON'
    },
  ];

  SegaGames: any = [
    {
      id: 1,
      name: 'Sonic',
      console: 'Megadrive',
      price: 451.15,
      stock: 'OUI'
    },

    {
      id: 2,
      name: 'Shinobi',
      console: 'Master System',
      price: 84.45,
      stock: 'NON'
    },
  ];

  selectedSegaGames: any;
  public NeoGeoGames: GamesComponent[];

  constructor(private  gamesService: GamesListsService) { }

  ngOnInit(): void {
    this.getAllNeoGeoGames();
  }

  onSelect(segaGame: any): void {
    this.selectedSegaGames = segaGame;
  }

  getAllNeoGeoGames(): void {
    this.gamesService.getNeoGeoGames()
      .subscribe(neogeoGames => this.NeoGeoGames = neogeoGames);
  }



}
