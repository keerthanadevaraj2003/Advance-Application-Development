package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Organizers;

public interface OrganizerRepo extends JpaRepository<Organizers, Long> {

}
