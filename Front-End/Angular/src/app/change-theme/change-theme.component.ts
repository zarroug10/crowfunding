
import { Component } from '@angular/core';
interface AppSettings {
  theme: string;
  fontSize: string;
  language: string;
 
}

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.css']
})
export class ChangeThemeComponent {
  appSettings: AppSettings = {
    theme: 'light',
    fontSize: 'medium',
    language: 'fr'
   
  };

  updateAppSettings() {
    
    console.log('Paramètres mis à jour :', this.appSettings);
  }
}


  
