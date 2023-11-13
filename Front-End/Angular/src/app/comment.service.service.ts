// comment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: { id: number, text: string }[] = [
    { id: 1, text: 'This is the first comment.' },
    { id: 2, text: 'Another comment here.' },
    { id: 3, text: 'A third comment for testing.' }
    
  ];

  constructor() { }

  getComments(): { id: number, text: string }[] {
    return this.comments;
  }

  getCommentById(id: number): { id: number, text: string } | null {
    const comment = this.comments.find(comment => comment.id === id);
    return comment || null;
  }
  
  addComment(text: string): void {
    const newId = this.comments.length + 1;
    this.comments.push({ id: newId, text });
  }

  deleteComment(id: number): void {
    const index = this.comments.findIndex(comment => comment.id === id);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}
