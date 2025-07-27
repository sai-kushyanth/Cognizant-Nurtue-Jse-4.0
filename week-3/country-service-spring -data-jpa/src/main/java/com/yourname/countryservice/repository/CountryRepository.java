package com.yourname.countryservice.repository;

import com.yourname.countryservice.entity.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {
    // Spring Data JPA query method
    Country findByCode(String code);

    // HQL query
    @Query("SELECT c FROM Country c WHERE c.name LIKE %:namePart%")
    List<Country> findByNameContains(String namePart);

    // Native query
    @Query(value = "SELECT * FROM Country WHERE name LIKE %:namePart%", nativeQuery = true)
    List<Country> findUsingNativeQuery(String namePart);
}
