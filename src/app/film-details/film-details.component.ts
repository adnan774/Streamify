import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../service/film.service';
import { Film } from '../model/film';

@Component({
  selector: 'app-film-details',
  standalone: false,
  
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
})
export class FilmDetailsComponent implements OnInit {
  film: Film | undefined;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    
    const filmId = this.route.snapshot.paramMap.get('id');
    if (filmId) {
      this.filmService.getFilms().subscribe((films) => {
        this.film = films.find((f) => f.imdbID === filmId);
      });
    }
  }
}
