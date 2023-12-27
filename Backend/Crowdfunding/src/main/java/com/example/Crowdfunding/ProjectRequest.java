package com.example.Crowdfunding;

import com.example.Crowdfunding.Projects.Project;

public class ProjectRequest {
    public Long getMember_id() {
        return member_id;
    }

    public void setMember_id(Long member_id) {
        this.member_id = member_id;
    }

    public Long getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Long category_id) {
        this.category_id = category_id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    private Long member_id;
    private Long category_id;
    private Project project;

    public ProjectRequest(Long memberId, Long categoryId, Project project) {
        member_id = memberId;
        category_id = categoryId;
        this.project = project;
    }

    // Getters and setters
}

