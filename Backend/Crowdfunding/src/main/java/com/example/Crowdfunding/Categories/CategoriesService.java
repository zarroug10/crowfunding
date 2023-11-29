package com.example.Crowdfunding.Categories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriesService {

    private final CategoriesRepository categoriesRepository;

    @Autowired
    public CategoriesService(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public void createCategory(Categories category) {
        categoriesRepository.save(category);
    }

    public List<Categories> getAllCategories() {
        return categoriesRepository.findAll();
    }

    public Optional<Categories> getCategoryById(Long id) {
        return categoriesRepository.findById(id);
    }

    public void deleteCategory(Long id) {
        categoriesRepository.deleteById(id);
    }

    public void updateCategory(Long id, Categories category) {
        Categories existingCategory = categoriesRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Category not found"));
        // Update fields as needed
        existingCategory.setCategory_name(category.getCategory_name());
        // ... update other fields
        categoriesRepository.save(existingCategory);
    }
}