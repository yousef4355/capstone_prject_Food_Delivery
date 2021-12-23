package com.example.FoodDelivery.model.entities;

import javax.persistence.*;

@Entity
@Table
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
     private String type;
     private String time;
     private  String location;
    @ManyToOne
    @JoinColumn(name = "order_id",referencedColumnName="orderId")
    private Orders order;
    public Orders(int id, String type, String time, String location) {
        this.id = id;
        this.type = type;
        this.time = time;
        this.location = location;
    }

    public Orders() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
