import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { Film } from '../model/film';

@Component({
  selector: 'app-film-list',
  standalone: false,
  
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})

export class FilmListComponent implements OnInit {
  films: Film[] = [];
  filteredFilms: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((data) => {
      this.films = data;
      this.filteredFilms = data;
      console.log('All films:', this.films); 
    });
  }

  addToFavourites(film: any): void {
    const username = localStorage.getItem('username'); 
    if (!username) {
      alert('You need to log in to add films to favourites.'); 
      return;
    }
  
    
    this.filmService.addFavourite(film);
    alert(`${film.Title} has been added to favourites!`);
  }
  

  searchFilms(query: string): void {
    console.log('Search query:', query);
    this.filteredFilms = this.films.filter(
      (film) =>
        film.Title?.toLowerCase().includes(query.toLowerCase()) || 
        film.Genre?.toLowerCase().includes(query.toLowerCase())
    );
    console.log('Filtered films:', this.filteredFilms);
  }

  updateResults(filteredFilms: any[]): void {
    if (!filteredFilms) {
      console.log('No filtered films received.');
      this.filteredFilms = this.films;
      return;
    }
    this.filteredFilms = filteredFilms;
    console.log('Updated filtered films:', this.filteredFilms);
  }
  
}
