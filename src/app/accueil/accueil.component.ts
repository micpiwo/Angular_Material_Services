import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  pictures: any = [
    {
      id: 1,
      url: 'https://picsum.photos/600',
    },

    {
      id: 2,
      url: 'https://picsum.photos/600',
    },

    {
      id: 3,
      url: 'https://picsum.photos/600',
    },

    {
      id: 4,
      url: 'https://picsum.photos/600',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
