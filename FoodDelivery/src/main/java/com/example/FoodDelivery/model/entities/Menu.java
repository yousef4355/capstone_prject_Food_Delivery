package com.example.FoodDelivery.model.entities;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int menu_id;
    private  String name;
    private String size;

    public Menu(int menu_id, String name, String size) {
        this.menu_id = menu_id;
        this.name = name;
        this.size = size;
    }

    public Menu() {
    }

    public int getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(int menu_id) {
        this.menu_id = menu_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
