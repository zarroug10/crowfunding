package com.example.Crowdfunding.Projects;


import com.example.Crowdfunding.Categories.Categories;
import com.example.Crowdfunding.Categories.CategoriesService;
import com.example.Crowdfunding.Members.Member;
import com.example.Crowdfunding.Members.MemberService;
import com.example.Crowdfunding.ProjectRequest;
import jdk.jfr.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final MemberService memberService;
    private final CategoriesService categoriesService;

    @Autowired
    public ProjectController(ProjectService projectService, MemberService memberService, CategoriesService categoriesService) {
        this.projectService = projectService;
        this.memberService = memberService;
        this.categoriesService = categoriesService;
    }


    @PostMapping("/addProject")
    public ResponseEntity<String> createProject(@RequestBody ProjectRequest projectRequest) {
        Long member_id = projectRequest.getMember_id();
        Long category_id = projectRequest.getCategory_id();

        Optional<Member> member = memberService.getMemberById(member_id);
        Optional<Categories> category = categoriesService.getCategoryById(category_id);

        if (member.isPresent() && category.isPresent()) {
            Project project = projectRequest.getProject();

            // Corrected: Provide member_id and category_id
            Project createdProject = projectService.createProject(project, member_id, category_id);

            return ResponseEntity.status(HttpStatus.CREATED).body("Project created successfully");
        } else {
            // Handle case where member or category does not exist
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Member or category not found");
        }
    }



    @GetMapping("/{id}")
    public Optional<Project> getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }

    @PutMapping("/{id}")
    public void updateProject(@PathVariable Long id, @RequestBody Project project) {
        projectService.updateProject(id, project);
    }
}
