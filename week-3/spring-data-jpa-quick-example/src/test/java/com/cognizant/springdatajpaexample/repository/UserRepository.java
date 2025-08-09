package com.yourname.springdatajpaexample.repository;

import com.yourname.springdatajpaexample.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
