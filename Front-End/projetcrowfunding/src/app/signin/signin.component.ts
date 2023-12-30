import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  remember: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.errorMessage = '';

    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      if (this.remember) {
        this.saveUserCredentials(); 
      }
      this.router.navigate(['/navbar-creat']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }

  forgotPassword() {
    console.log('Forgot Password function called');
  }

  private saveUserCredentials() {
    
    console.log('User credentials saved for 30 days');
  }
}
