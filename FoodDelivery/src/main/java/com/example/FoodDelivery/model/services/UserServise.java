package com.example.FoodDelivery.model.services;

import com.example.FoodDelivery.model.entities.User;
import com.example.FoodDelivery.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServise {
    private UserRepository userRepository;

    @Autowired
    public void UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUser() {
        return userRepository.findAll();

    }

    public Optional<User> getUser(Integer userId) {
        return userRepository.findById(userId);

   }
    public String getCheck(String username ,String password) {
        if( userRepository.existsById(username)  ) {

            String user = userRepository.findByUsername(username);
            String password1= userRepository.findByPassword(password);
            if (user.equals(password)) {
                return "welcome you Authentication";
            } else {
                return " sorry not  Authentication";
            }
        }
        return "sorry not  Authentication";
   }
    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
        //boolean exist = userRepository.existsById(userId);
        // put a condition on 'exist'. if exist then delete
    }
}

