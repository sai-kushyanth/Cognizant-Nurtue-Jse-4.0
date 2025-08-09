package com.yourname.countryservice.service;

import com.yourname.countryservice.entity.Country;
import com.yourname.countryservice.repository.CountryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public Country getCountryByCode(String code) {
        return countryRepository.findByCode(code);
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public List<Country> searchCountriesByName(String namePart) {
        return countryRepository.findByNameContains(namePart);
    }

    public List<Country> searchCountriesNative(String namePart) {
        return countryRepository.findUsingNativeQuery(namePart);
    }
}
