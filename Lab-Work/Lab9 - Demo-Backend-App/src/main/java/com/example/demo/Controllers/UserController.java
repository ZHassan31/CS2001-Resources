package com.example.demo.Controllers;
import java.util.List;
import java.util.Optional;

import com.example.demo.Repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Services.UserService;
import com.example.demo.Models.User;

@RestController
public class UserController {
    @Autowired
	UserService userService;
    @Autowired
    UserRepository userRepository;

    //Get All Users
    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    //Post a User
    @PostMapping("/user")
    public void addUser(@RequestBody User newUser) {
        userRepository.save(newUser);
    }
    //Get User by ID
    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }

    //Delete a User by ID
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    //Get User by Email
    @GetMapping("/user/email/{email}")
        public User findByEmail(@PathVariable String email) {
            return userService.findByEmail(email);
    }
}
