package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Event;

public interface EventRepo extends JpaRepository<Event, Long> {

}
