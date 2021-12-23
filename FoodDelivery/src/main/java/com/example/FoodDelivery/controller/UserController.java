package com.example.FoodDelivery.controller;

import com.example.FoodDelivery.model.entities.User;
import com.example.FoodDelivery.model.services.UserServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping (path = "api/user")
public class UserController {
    private UserServise userService;

    @Autowired
    public UserController(UserServise userService) {
        this.userService = userService;
    }

    @GetMapping(path="UserController")
    public List<User> getUsers() {

        return userService.getUser();
    }

    @GetMapping(path = "{userId}")
    public Optional<User> getUser(@PathVariable(name = "userId") Integer userId) {
        return userService.getUser(userId);
    }

    @PostMapping("add")
    public void registerNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "delete/{userId}")
    public void deleteUser(@PathVariable ("userId") Integer userId){
        userService.deleteUser(userId);
    }

}
