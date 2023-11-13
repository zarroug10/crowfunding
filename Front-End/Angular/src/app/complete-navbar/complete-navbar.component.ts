
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-navbar',
  templateUrl: './complete-navbar.component.html',
  styleUrls: ['./complete-navbar.component.css']
})
export class CompleteNavbarComponent {
  constructor(private router: Router) { }

  logout() {
    
    this.router.navigate(['/admin-auth']);
  }
}
