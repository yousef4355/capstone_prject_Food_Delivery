package com.example.FoodDelivery.model.entities;

import javax.persistence.*;

@Entity
@Table
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ORDER_id;
     private String type;
     private String time;
     private  String location;

    @ManyToOne
    @JoinColumn(name = "userId",referencedColumnName="id")
    private User user;

    public Orders(int ORDER_id, String type, String time, String location, User user) {
        this.ORDER_id = ORDER_id;
        this.type = type;
        this.time = time;
        this.location = location;
        this.user = user;
    }

    public Orders() {
    }


    public int getORDER_id() {
        return ORDER_id;
    }

    public void setORDER_id(int ORDER_id) {
        this.ORDER_id = ORDER_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
