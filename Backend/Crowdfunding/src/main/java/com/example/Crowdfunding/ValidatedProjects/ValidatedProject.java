package com.example.Crowdfunding.ValidatedProjects;

import com.example.Crowdfunding.Admins.Admin;
import com.example.Crowdfunding.Projects.Project;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name = "validatedprojects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ValidatedProject {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQUENCE_Valid")
    @SequenceGenerator(name = "SEQUENCE_Valid", sequenceName = "validatedprojects_validation_id_seq", allocationSize = 1)
    private Long validation_id;
    private Date ValidationDate;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    // Define relationships here if needed
}
