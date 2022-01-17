package com.example.FoodDelivery.controller;

import com.example.FoodDelivery.model.entities.Menu;
import com.example.FoodDelivery.model.entities.Orders;
import com.example.FoodDelivery.model.entities.User;
import com.example.FoodDelivery.model.services.MenuServise;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

public class MenuControllerTest {
    @Mock
    MenuServise menuServise;
    @InjectMocks
    MenuController menuController;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetMenu() throws Exception {
        when(menuServise.getMenu()).thenReturn(Arrays.<Menu>asList(new Menu(0, "name", "size", "picture", new Orders(0, "type", "time", "location", new User(0, "username", "email", "password")))));

        List<Menu> result = menuController.getMenu();
        Assert.assertEquals(Arrays.<Menu>asList(new Menu(0, "name", "size", "picture", new Orders(0, "type", "time", "location", new User(0, "username", "email", "password")))), result);
    }

    @Test
    public void testGetMenu2() throws Exception {
        when(menuServise.getMenu(anyInt())).thenReturn(null);

        Optional<Menu> result = menuController.getMenu(Integer.valueOf(0));
        Assert.assertEquals(null, result);
    }

    @Test
    public void testRegisterNewMenu() throws Exception {
        menuController.registerNewMenu(new Menu(0, "name", "size", "picture", new Orders(0, "type", "time", "location", new User(0, "username", "email", "password"))));
    }

    @Test
    public void testDeleteMENU() throws Exception {
        menuController.deleteMENU(Integer.valueOf(0));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme