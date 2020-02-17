import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  Roles: any = [
    'Administrateur',
    'Auteur',
    'Visiteur'
  ];

  selected = this.Roles[0].id;

  ngOnInit(): void {
  }
}
