
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  template: `
    <app-navbar></app-navbar>
    <h1>better solution for your<b>
      dreams</b>
    </h1>
    <div class="fullscreen-image">
    <img src="assets\logoproject.png">
    <p>
      <h4></h4>
   </div>
    <div class="main-content">
     
    </div>
  `,
  styles: [`
    .main-content {
      padding: 50px;
    }
  `]
})
export class MainPageComponent {}
