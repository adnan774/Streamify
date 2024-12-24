import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() films: any[] = []; // Receive films from parent
  @Output() searchResults = new EventEmitter<any[]>(); // Emit filtered results

  searchCategory: string = 'title'; // Default search category
  searchTerm: string = ''; // User-entered search term
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit() {
  //   this.http.get<any>('http://localhost:3000/films').subscribe(
  //     (data) => {
  //       this.films = data.films || []; // Safely handle cases where data.films is undefined
  //       this.filteredFilms = [...this.films]; // Initialize filteredFilms with all films
  //       console.log('Fetched films:', this.films);
  //     },
  //     (error) => {
  //       console.error('Error fetching films:', error);
  //     }
  //   );
  // }
  

  onSearch(): void {
    if (!this.films || this.films.length === 0) {
      console.error('Films data is not available for search.');
      return;
    }
  
    let filteredFilms;
    if (!this.searchTerm.trim()) {
      filteredFilms = this.films; // Reset to all films if search term is empty
    } else {
      const searchKey = this.searchCategory.toLowerCase();
      filteredFilms = this.films.filter((film) => {
        if (searchKey === 'title') {
          return film.Title?.toLowerCase().includes(this.searchTerm.toLowerCase());
        } else if (searchKey === 'genre') {
          return film.Genre?.toLowerCase().includes(this.searchTerm.toLowerCase());
        } else if (searchKey === 'rating') {
          const filmRating = parseFloat(film.imdbRating); // Convert IMDb rating to a number
          const searchRating = parseFloat(this.searchTerm); // Convert search term to a number
          return filmRating >= searchRating; // Match films with rating greater than or equal to the search term
        }
        return false;
      });
    }
  
    console.log('Filtered films:', filteredFilms);
    this.searchResults.emit(filteredFilms);
  }
  
  
}
