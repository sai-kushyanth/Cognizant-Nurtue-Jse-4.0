package com.yourname.countryservice.controller;

import com.yourname.countryservice.entity.Country;
import com.yourname.countryservice.service.CountryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return countryService.getCountryByCode(code);
    }

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return countryService.addCountry(country);
    }

    @GetMapping("/search")
    public List<Country> searchByName(@RequestParam String namePart) {
        return countryService.searchCountriesByName(namePart);
    }

    @GetMapping("/search-native")
    public List<Country> searchByNative(@RequestParam String namePart) {
        return countryService.searchCountriesNative(namePart);
    }
}
