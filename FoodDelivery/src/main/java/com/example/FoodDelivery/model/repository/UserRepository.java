package com.example.FoodDelivery.model.repository;

import com.example.FoodDelivery.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
public interface UserRepository  extends JpaRepository<User, Integer> {

@Query("SELECT password FROM User WHERE name = :name" )
    String findPasswordByUsername(@Param("name") String name);

@Query("select case when count(name) > 0 then true else false end from User where name = :name")
    Boolean existsByUsername(@Param("name") String name);


//    @Query ("SELECT password FROM User WHERE password = :password")
//   String findByPassword(@Param("Password") String password);
//    @Query("SLECT username FROM user WHERE username =:username ")
//    String findByUsername(@Param("username")String username);
//
//    boolean existsByUsername(@Param("name") String name);
}


