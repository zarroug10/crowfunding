import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css'],
})
export class AdminAuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.errorMessage = '';

    const loginDTO = { email: this.username, password: this.password };

    this.http.post<any>('http://your-backend-url/api/v1/admins/login', loginDTO)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/complete-navbar']);
        },
        (error) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
  }

  forgotPassword() {
    console.log('Forgot Password function called');
  }
}
