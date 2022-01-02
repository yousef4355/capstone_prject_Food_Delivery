package com.example.FoodDelivery.model.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Restaurants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int RestaurantsId;
    private String name;
    private String image;


    public Restaurants(int restaurantsId, String name, String image) {
        RestaurantsId = restaurantsId;
        this.name = name;
        this.image = image;
    }

    public Restaurants() {


    }




    public int getRestaurantsId() {
        return RestaurantsId;
    }

    public void setRestaurantsId(int restaurantsId) {
        RestaurantsId = restaurantsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
