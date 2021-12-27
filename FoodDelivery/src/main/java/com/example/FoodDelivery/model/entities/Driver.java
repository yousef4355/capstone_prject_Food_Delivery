package com.example.FoodDelivery.model.entities;

import javax.persistence.*;

@Entity
@Table
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int drive_id;
    private String phone_numbere;
    private  String name;

    public Driver(int drive_id, String phone_numbere, String name) {
        this.drive_id = drive_id;
        this.phone_numbere = phone_numbere;
        this.name = name;
    }

    public Driver() {
    }

    public int getDrive_id() {
        return drive_id;
    }

    public void setDrive_id(int drive_id) {
        this.drive_id = drive_id;
    }

    public String getPhone_numbere() {
        return phone_numbere;
    }

    public void setPhone_numbere(String phone_numbere) {
        this.phone_numbere = phone_numbere;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
