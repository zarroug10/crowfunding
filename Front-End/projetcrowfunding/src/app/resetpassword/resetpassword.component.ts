import { Component } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  emailReset: string = '';
  phoneReset: string = '';

  continue() {
    
    console.log('Continue button clicked');
    console.log('Email Reset:', this.emailReset);
    console.log('Phone Reset:', this.phoneReset);
  }
}
