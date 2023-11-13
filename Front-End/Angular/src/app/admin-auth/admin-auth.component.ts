import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    this.errorMessage = '';

    
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/complete-navbar']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
