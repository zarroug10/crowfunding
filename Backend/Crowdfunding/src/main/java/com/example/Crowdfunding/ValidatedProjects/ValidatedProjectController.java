package com.example.Crowdfunding.ValidatedProjects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/validated-projects")
public class ValidatedProjectController {

    private final ValidatedProjectService validatedProjectService;

    @Autowired
    public ValidatedProjectController(ValidatedProjectService validatedProjectService) {
        this.validatedProjectService = validatedProjectService;
    }

    @PostMapping
    public void createValidatedProject(@RequestBody ValidatedProject validatedProject) {
        validatedProjectService.createValidatedProject(validatedProject);
    }

    @GetMapping("/{id}")
    public Optional<ValidatedProject> getValidatedProjectById(@PathVariable Long id) {
        return validatedProjectService.getValidatedProjectById(id);
    }

    @GetMapping
    public List<ValidatedProject> getAllValidatedProjects() {
        return validatedProjectService.getAllValidatedProjects();
    }

    @DeleteMapping("/{id}")
    public void deleteValidatedProject(@PathVariable Long id) {
        validatedProjectService.deleteValidatedProject(id);
    }

    @PutMapping("/{id}")
    public void updateValidatedProject(@PathVariable Long id, @RequestBody ValidatedProject validatedProject) {
        validatedProjectService.updateValidatedProject(id, validatedProject);
    }
}

