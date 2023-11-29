package com.example.Crowdfunding.Admins;



import com.example.Crowdfunding.Categories.Categories;
import com.example.Crowdfunding.Categories.CategoriesService;
import com.example.Crowdfunding.Comments.Comment;
import com.example.Crowdfunding.Comments.CommentService;
import com.example.Crowdfunding.Members.Member;
import com.example.Crowdfunding.Members.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/admins")
public class AdminController {

    private final AdminService adminService;
    private final CategoriesService categoriesService;
    private final CommentService commentService;
    private final MemberRepository memberRepository;

    @Autowired
    public AdminController(AdminService adminService, CategoriesService categoriesService, CommentService commentService, MemberRepository memberRepository) {
        this.adminService = adminService;
        this.categoriesService = categoriesService;
        this.commentService = commentService;
        this.memberRepository = memberRepository;
    }


    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
    }
    @PutMapping("/{id}")
    public void updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
        adminService.updateAdmin(id, admin);
    }
    //Login
    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) {
        String email = admin.getEmail();
        String password = admin.getPassword();

        // Use your AdminService to authenticate the admin
        Admin loggedInAdmin = adminService.loginAdmin(email, password);

        if (loggedInAdmin != null) {
            // Admin is authenticated, you may generate a token or perform other actions
            // For simplicity, returning the authenticated admin for now
            return new ResponseEntity<>(loggedInAdmin, HttpStatus.OK);
        } else {
            // Authentication failed
            return new ResponseEntity<>("Incorrect email or password", HttpStatus.UNAUTHORIZED);
        }
    }


    //manage categories
    @PostMapping("/categories")
    public void createCategory(@RequestBody Categories category) {
        categoriesService.createCategory(category);
    }
    @GetMapping("/categories")
    public List<Categories> getAllCategories() {
        return categoriesService.getAllCategories();
    }
    @GetMapping("/categories/{id}")
    public Optional<Categories> getCategoryById(@PathVariable Long id) {
        return categoriesService.getCategoryById(id);
    }
    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoriesService.deleteCategory(id);
    }

//manage member
    @GetMapping("/members")
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @GetMapping("/members/{id}")
    public Optional<Member> getMemberById(Long id) {
        return memberRepository.findById(id);
    }

    @DeleteMapping("/members/{id}")
    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }
//manage comment
    @GetMapping("/comments")
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }
    @DeleteMapping("/comments/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}
