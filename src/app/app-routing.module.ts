import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { authGuard } from './service/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AddFilmComponent } from './add-film/add-film.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: 'favourites', component: FavouritesComponent, canActivate: [authGuard] },
  { path: 'add', component: AddFilmComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
