package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.OrganizersDto;
import com.example.demo.Services.OrganizerService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/organizer")
public class OrganizerController {

    private OrganizerService organizerService;

    // Build Add Employee REST API
    @PostMapping("/create")
    public ResponseEntity<OrganizersDto> createOrganizers(@RequestBody OrganizersDto organizersDto) {
        OrganizersDto savedOrganizer = organizerService.createOrganizers(organizersDto);
        return new ResponseEntity<>(savedOrganizer, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<OrganizersDto> getPaymentId(@PathVariable("id") Long organizersId) {
        OrganizersDto organizerDto = organizerService.getOrganizersById(organizersId);
        return ResponseEntity.ok(organizerDto);
    }

    // Build Get All Employee REST API
    @GetMapping("/all")
    public ResponseEntity<List<OrganizersDto>> getAllOrganizers() {
        List<OrganizersDto> organizers = organizerService.getAllOrganizers();
        return ResponseEntity.ok(organizers);
    }

}
