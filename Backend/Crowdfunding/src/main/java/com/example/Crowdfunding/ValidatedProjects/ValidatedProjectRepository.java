package com.example.Crowdfunding.ValidatedProjects;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValidatedProjectRepository extends JpaRepository<ValidatedProject, Long> {
}
