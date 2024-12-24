import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Film } from '../model/film';


@Component({
  selector: 'app-add-film',
  standalone: false,

  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent {
  newFilm: Film = {
    Title: '',
    Genre: '',
    imdbRating: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (!this.newFilm.Title || !this.newFilm.Genre || !this.newFilm.imdbRating) {
      alert('Please fill out all required fields!');
      return;
    }

    this.http.post('http://localhost:3000/films', this.newFilm).subscribe(
      () => {
        alert('Film added successfully!');
        this.router.navigate(['/films']); 
      },
      (error) => {
        console.error('Error adding film:', error);
        alert('Failed to add the film. Please try again.');
      }
    );
  }
}
