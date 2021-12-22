package com.example.FoodDelivery.model.services;

import com.example.FoodDelivery.model.entities.Order;
import com.example.FoodDelivery.model.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class OrderServise {
    private OrderRepository userRepository;

    @Autowired
    public void OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getOrder() {
        return orderRepository.findAll();

    }

    public Optional<Order> getOrder(Integer orderId) {
        return orderRepository.findById(orderIdId);

    }
    public void addNewOrder(Order order) {
        orderRepository.save(order);
    }

    public void deleteOrderr(Integer orderId) {
        orderRepository.deleteById(orderId);
        //boolean exist = orderRepository.existsById(OrderId);
        // put a condition on 'exist'. if exist then delete
    }
}
