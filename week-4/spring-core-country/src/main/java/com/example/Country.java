package com.example.country;

public class Country {
    private String name;
    private String capital;

    public Country() {
        // Default constructor
    }

    public Country(String name, String capital) {
        this.name = name;
        this.capital = capital;
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for capital
    public String getCapital() {
        return capital;
    }
    public void setCapital(String capital) {
        this.capital = capital;
    }

    public void display() {
        System.out.println("Country: " + name);
        System.out.println("Capital: " + capital);
    }
}
