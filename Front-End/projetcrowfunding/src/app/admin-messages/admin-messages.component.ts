import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent {
  reponse: string = '';
  creatorId: string = 'créateur'; 
  messages: string[] = [];

  constructor(private communicationService: CommunicationService) {
    this.refreshMessages();
  }

  refreshMessages() {
    this.messages = this.communicationService.getConversation(this.creatorId, 'admin');
  }

  envoyerReponse() {
    this.communicationService.envoyerMessage('admin', this.creatorId, this.reponse);
    this.reponse = '';
    
    this.refreshMessages();
  }
}
