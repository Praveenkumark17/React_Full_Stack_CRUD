package com.FirstSpring.service;

import com.FirstSpring.exception.Usernotfoundexception;
import com.FirstSpring.model.User;
import com.FirstSpring.serviceImpl.userservice;
import com.FirstSpring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class userServiceImpl implements userservice {

    @Autowired
    public  UserRepository userRepository;

    @Override
    public List<User> getAlluserservices(){
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User newUser){
        return userRepository.save(newUser);
    }

    @Override
    public User getId(@PathVariable Long id){
        return  userRepository.findById(id).orElseThrow(()->new Usernotfoundexception("User Id not found: " + id));
    }

    @Override
    public User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return  userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return  userRepository.save(user);
                }).orElseThrow(()->new Usernotfoundexception("User Id Not Found: " + id));
    }

    @Override
    public String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new Usernotfoundexception("User id not found: "+ id);
        }
        userRepository.deleteById(id);
        return "User id: "+ id +" has been deleted";
    }
}
