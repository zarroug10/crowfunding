import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  
  onSearch() {
    
    console.log('Bouton de recherche cliqué !');

  }
  currentProjectIndex = 0;
  projects: any[] = [
    { id: 1, name: 'Projet 1' },
    { id: 2, name: 'Projet 2' },
    { id: 3, name: 'Projet 3' },
   
  ];


  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  
  }

}
