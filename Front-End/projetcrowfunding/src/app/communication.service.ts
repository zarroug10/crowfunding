import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  conversations: { [key: string]: string[] } = {};

  envoyerMessage(from: string, to: string, message: string) {
    const conversationId = `${from}_${to}`;
    if (!this.conversations[conversationId]) {
      this.conversations[conversationId] = [];
    }
    this.conversations[conversationId].push(message);
  }

  getConversation(from: string, to: string): string[] {
    const conversationId = `${from}_${to}`;
    return this.conversations[conversationId] || [];
  }
}
