package com.example.FoodDelivery.model.repository;

import com.example.FoodDelivery.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {
    @Query ("SELECT password FROM User WHERE password = :password")
   String findByPassword(@Param("Password") String password);
    @Query("SLECT usernane FROM user WHERE username =:username ")
    String findByUsername(@Param("username")String username);

}


