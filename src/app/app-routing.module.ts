import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {GamesComponent} from './games/games.component';
import {GameDetailsComponent} from './game-details/game-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'connexion',
    component: LoginComponent,
  },
  {
    path: 'inscription',
    component: RegisterComponent,
  },
  {
    path: 'jeux',
    component: GamesComponent,
  },
  {
    path: 'details-jeux',
    component: GameDetailsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
