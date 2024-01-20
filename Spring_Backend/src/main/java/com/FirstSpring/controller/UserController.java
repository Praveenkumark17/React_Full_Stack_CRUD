package com.FirstSpring.controller;

import com.FirstSpring.model.User;
import com.FirstSpring.serviceImpl.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    public userservice service;

    @PostMapping("/saveuser")
    User saveUser(@RequestBody User user){
        return service.saveUser(user);
    }

    @GetMapping("/getuser")
    List<User> getAlluser(){
        return service.getAlluserservices();
    }

    @GetMapping("/getuser/{id}")
    User getUserId(@PathVariable Long id){
        return service.getId(id);
    }

    @PutMapping("/putuser/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return  service.updateUser(newUser,id);
    }

    @DeleteMapping("/deleteuser/{id}")
    String deleteUser(@PathVariable Long id){
        return service.deleteUser(id);
    }
}
