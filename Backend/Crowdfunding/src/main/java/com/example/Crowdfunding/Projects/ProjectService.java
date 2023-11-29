package com.example.Crowdfunding.Projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public void createProject(Project project) {
        projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public void updateProject(Long id, Project project) {
        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Project not found"));
        // Update fields as needed
        existingProject.setProjectName(project.getProjectName());
        // ... update other fields
        projectRepository.save(existingProject);
    }
}
