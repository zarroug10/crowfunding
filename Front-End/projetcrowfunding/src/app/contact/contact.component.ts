import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message: string = '';
  adminId: string = 'admin'; // Identifier l'administrateur

  constructor(private communicationService: CommunicationService) {}

  envoyerMessage() {
    this.communicationService.envoyerMessage(this.adminId, 'créateur', this.message);
    this.message = ''; // Effacez le champ après l'envoi
  }
}
