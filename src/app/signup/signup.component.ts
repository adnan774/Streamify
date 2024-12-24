import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSignup(): void {
    if (this.username && this.password) {
      const user = { username: this.username, password: this.password };

      this.http.post('http://localhost:3000/users', user).subscribe(
        (response) => {
          alert('Signup successful! Please login.');
          this.router.navigate(['/login']); 
        },
        (error) => {
          console.error('Error during signup:', error);
          alert('Signup failed. Please try again.');
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }
}
