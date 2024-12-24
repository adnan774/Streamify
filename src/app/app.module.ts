import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, registerLocaleData } from '@angular/common';  
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatError } from '@angular/material/form-field'; 

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SignupComponent } from './signup/signup.component';
import { AddFilmComponent } from './add-film/add-film.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PagenotfoundComponent,
    FilmListComponent,
    FilmDetailsComponent,
    SearchBarComponent,
    FavouritesComponent,
    SignupComponent,
    AddFilmComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatButtonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
