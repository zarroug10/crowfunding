// solution.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent {

  chooseSolution(solution: string): void {
  
    console.log(`Selected solution: ${solution}`);
  }


  
  contactCoach(): void {
   
    console.log('Contact Coach function called');
  }

  
  goToSEO(): void {
   
    console.log('Go to SEO function called');
  }

  contactDigitalPartner(): void {
    
    console.log('Contact Digital Partner function called');
  }

  
}
