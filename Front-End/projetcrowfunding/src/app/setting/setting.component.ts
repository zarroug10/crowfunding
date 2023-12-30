import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  newImage: string = ''; 
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  confirmPasswordMatch(): boolean {
    return this.confirmPassword === this.newPassword;
  }

 
  updateSettings() {
    
  }
}


