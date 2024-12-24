import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-favourites',
  standalone: false,
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  favouriteFilms: any[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.favouriteFilms = this.filmService.getFavourites();
  }

  removeFromFavourites(film: any): void {
    this.filmService.removeFavourite(film);
    this.favouriteFilms = this.filmService.getFavourites();
  }
}
