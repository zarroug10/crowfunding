package com.example.Crowdfunding.Projects;

import java.util.Date;

public class ProjectDto {
    private String project_name;
    private String project_description;
    private String project_deadline;
    private String imageUrl; // This will store the URL of the image
    private Date start_date;
    private double funds_to_raise;

    // Constructors, getters, and setters

    public ProjectDto() {
        // Default constructor
    }

    public ProjectDto(String project_name, String project_description, String project_deadline, String imageUrl, Date start_date, double funds_to_raise) {
        this.project_name = project_name;
        this.project_description = project_description;
        this.project_deadline = project_deadline;
        this.imageUrl = imageUrl;
        this.start_date = start_date;
        this.funds_to_raise = funds_to_raise;
    }

    // Getters and setters...

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getProject_description() {
        return project_description;
    }

    public void setProject_description(String project_description) {
        this.project_description = project_description;
    }

    public String getProject_deadline() {
        return project_deadline;
    }

    public void setProject_deadline(String project_deadline) {
        this.project_deadline = project_deadline;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public double getFunds_to_raise() {
        return funds_to_raise;
    }

    public void setFunds_to_raise(double funds_to_raise) {
        this.funds_to_raise = funds_to_raise;
    }
}

