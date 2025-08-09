package com.example.hellorest.service;

import com.example.hellorest.dao.HelloDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HelloService {

    @Autowired
    private HelloDAO helloDAO;

    public String getMessage() {
        return helloDAO.fetchMessage();
    }
}
