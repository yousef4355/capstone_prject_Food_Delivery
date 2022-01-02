package com.example.FoodDelivery.model.repository;

import com.example.FoodDelivery.model.entities.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu ,Integer> {
}
