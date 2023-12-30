package com.example.Crowdfunding.Comments;

import com.example.Crowdfunding.Members.Member;
import com.example.Crowdfunding.Projects.Project;
import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "comments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "SEQUENCE_COMMENTS")
    @SequenceGenerator(name = "SEQUENCE_COMMENTS", sequenceName = "comments_comment_id_seq", allocationSize = 1)
    private Long comment_id;
    private String CommentText;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}
