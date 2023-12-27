package com.example.Crowdfunding.Projects;


import com.example.Crowdfunding.Categories.Categories;
import com.example.Crowdfunding.Members.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "SEQUENCE_PROJECT")
    @SequenceGenerator(name = "SEQUENCE_PROJECT", sequenceName = "projects_project_id_seq", allocationSize = 1)
    private Long project_id;

    private String project_name;
    private String project_description;
    private String project_deadline;
    private String imageUrl;
    private Date start_date;
    private boolean is_closed;
    private double funds_contributed;
    private double funds_to_raise;

    private boolean validated;


    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "category_name")
    private Categories category;
}

