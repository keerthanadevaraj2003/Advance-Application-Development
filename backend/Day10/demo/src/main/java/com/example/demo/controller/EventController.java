package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.EventDto;
import com.example.demo.Services.EventService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/event")
public class EventController {

    private EventService eventService;

    // Build Add Employee REST API
    @PostMapping("/create")
    public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
        EventDto savedEvent = eventService.createEvent(eventDto);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EventDto> getEventId(@PathVariable("id") Long eventId) {
        EventDto eventDto = eventService.getEventById(eventId);
        return ResponseEntity.ok(eventDto);
    }

    // Build Get All Employee REST API
    @GetMapping("/all")
    public ResponseEntity<List<EventDto>> getAllEvent() {
        List<EventDto> events = eventService.getAllEvent();
        return ResponseEntity.ok(events);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<EventDto> updateEvent(@PathVariable("id") Long eventId, @RequestBody EventDto eventDto) {
        EventDto updatedEvent = eventService.updateEvent(eventId, eventDto);
        return ResponseEntity.ok(updatedEvent);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable("id") Long eventId) {
        eventService.deleteEvent(eventId);
        return ResponseEntity.noContent().build();
    }

}
 

