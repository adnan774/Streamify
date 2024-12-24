import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private readonly dataUrl = 'http://localhost:3000/films';
  private favourites: any[] = [];

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.dataUrl); // No need to map as JSON Server returns a flat array
  }

  getFilmById(id: string): Observable<Film | undefined> {
    return this.http.get<Film>(`${this.dataUrl}/${id}`);
  }

  addFavourite(film: any): void {
    if (!this.favourites.some((fav) => fav.imdbID === film.imdbID)) {
      this.favourites.push(film);
    }
  }

  getFavourites(): any[] {
    return this.favourites;
  }

  removeFavourite(film: any): void {
    this.favourites = this.favourites.filter((fav) => fav.imdbID !== film.imdbID);
  }

}
