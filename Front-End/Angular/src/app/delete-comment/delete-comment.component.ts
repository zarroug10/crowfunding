
import { Component } from '@angular/core';
import { CommentService } from '../comment.service.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent {
  commentId:number=1;

  constructor(private commentService: CommentService) { }

  deleteComment() {
    this.commentService.deleteComment(this.commentId);
    this.commentId = 0; 
  }
}