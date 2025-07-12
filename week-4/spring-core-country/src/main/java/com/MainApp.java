package com.example.country;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring Configuration XML
        ApplicationContext context = new ClassPathXmlApplicationContext("country-config.xml");

        // Retrieve the Country bean
        Country country = (Country) context.getBean("countryBean");

        // Call display method
        country.display();
    }
}
