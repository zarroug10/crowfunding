package com.example.Crowdfunding.Discussions;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/discussions")
public class DiscussionController {

    private final DiscussionService discussionService;

    @Autowired
    public DiscussionController(DiscussionService discussionService) {
        this.discussionService = discussionService;
    }

    @PostMapping
    public void createDiscussion(@RequestBody Discussion discussion) {
        discussionService.createDiscussion(discussion);
    }

    @GetMapping
    public List<Discussion> getAllDiscussions() {
        return discussionService.getAllDiscussions();
    }

    @GetMapping("/{id}")
    public Optional<Discussion> getDiscussionById(@PathVariable("id") Long id) {
        return discussionService.getDiscussionById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteDiscussion(@PathVariable("id") Long id) {
        discussionService.deleteDiscussion(id);
    }

    @PutMapping("/{id}")
    public void updateDiscussion(@PathVariable("id") Long id, @RequestBody Discussion discussion) {
        discussionService.updateDiscussion(id, discussion);
    }
}