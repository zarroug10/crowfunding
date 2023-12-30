import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  phone: string = "";
  city: string = "";
  state: string = "";
  password: string = "";
  confirmPassword: string = "";
  membershipType: string = "";
  errorMessage :string="";
  constructor(private router: Router) { }

  signup() {
    console.log('Sign up button clicked');
    console.log('First Name:', this.firstname);
    console.log('Last Name:', this.lastname);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('City:', this.city);
    console.log('State:', this.state);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Membership Type:', this.membershipType);

    

    
      
      if (this.membershipType === 'visitor') {
        
        this.router.navigate(['/donation-form']);
      } else if (this.membershipType === 'member') {
        
        this.router.navigate(['/navbar-creat']);
      }
    }
  }
  

