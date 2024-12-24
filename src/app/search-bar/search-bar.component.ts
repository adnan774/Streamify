import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() films: any[] = []; 
  @Output() searchResults = new EventEmitter<any[]>(); 

  searchCategory: string = 'title'; 
  searchTerm: string = ''; 
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  onSearch(): void {
    if (!this.films || this.films.length === 0) {
      console.error('Films data is not available for search.');
      return;
    }
  
    let filteredFilms;
    if (!this.searchTerm.trim()) {
      filteredFilms = this.films; 
    } else {
      const searchKey = this.searchCategory.toLowerCase();
      filteredFilms = this.films.filter((film) => {
        if (searchKey === 'title') {
          return film.Title?.toLowerCase().includes(this.searchTerm.toLowerCase());
        } else if (searchKey === 'genre') {
          return film.Genre?.toLowerCase().includes(this.searchTerm.toLowerCase());
        } else if (searchKey === 'rating') {
          const filmRating = parseFloat(film.imdbRating); 
          const searchRating = parseFloat(this.searchTerm); 
          return filmRating >= searchRating; 
        }
        return false;
      });
    }
  
    console.log('Filtered films:', filteredFilms);
    this.searchResults.emit(filteredFilms);
  }
  
  
}
