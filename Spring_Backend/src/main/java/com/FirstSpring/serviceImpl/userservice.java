package com.FirstSpring.serviceImpl;

import com.FirstSpring.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface userservice {

    public  List<User> getAlluserservices();

    public User saveUser(User newUser);

    public User getId(Long id);

    public  User updateUser(User newUser,Long id);

    public String deleteUser(Long id);
}
