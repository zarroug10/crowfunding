package com.example.Crowdfunding.ValidatedProjects;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ValidatedProjectService {

    private final ValidatedProjectRepository validatedProjectRepository;

    @Autowired
    public ValidatedProjectService(ValidatedProjectRepository validatedProjectRepository) {
        this.validatedProjectRepository = validatedProjectRepository;
    }

    public void createValidatedProject(ValidatedProject validatedProject) {
        validatedProjectRepository.save(validatedProject);
    }

    public List<ValidatedProject> getAllValidatedProjects() {
        return validatedProjectRepository.findAll();
    }

    public Optional<ValidatedProject> getValidatedProjectById(Long id) {
        return validatedProjectRepository.findById(id);
    }

    public void deleteValidatedProject(Long id) {
        validatedProjectRepository.deleteById(id);
    }

    public void updateValidatedProject(Long id, ValidatedProject validatedProject) {
        ValidatedProject existingValidatedProject = validatedProjectRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Validated Project not found"));
        // Update fields as needed
        existingValidatedProject.setValidationDate(validatedProject.getValidationDate());
        // ... update other fields
        validatedProjectRepository.save(existingValidatedProject);
    }
}
