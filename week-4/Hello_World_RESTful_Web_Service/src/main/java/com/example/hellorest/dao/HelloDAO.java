package com.example.hellorest.dao;

import org.springframework.stereotype.Repository;

@Repository
public class HelloDAO {
    public String fetchMessage() {
        return "Hello, World from RESTful Web Service!";
    }
}
