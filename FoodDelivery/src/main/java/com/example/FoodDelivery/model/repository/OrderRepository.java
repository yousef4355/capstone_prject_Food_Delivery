package com.example.FoodDelivery.model.repository;

import com.example.FoodDelivery.model.entities.Order;
import com.example.FoodDelivery.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository <Order, Integer> {
}
