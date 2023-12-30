import { Component } from '@angular/core';

@Component({
  selector: 'app-donation-projet',
  templateUrl: './donation-projet.component.html',
  styleUrls: ['./donation-projet.component.css']
})
export class DonationProjetComponent {
  donorsCount: number = 100; 
  moneyRaised: number = 5000; 
  donationGoal: number = 10000; 
  daysLeft: number = 30; 
}
