package com.example.demo.Services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.EventDto;
import com.example.demo.models.Event;
import com.example.demo.exception.EventException;
import com.example.demo.mapper.EventMapper;
import com.example.demo.repository.EventRepo;
import com.example.demo.Services.EventService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private EventRepo eventRepo;

    @Override
    public EventDto createEvent(EventDto eventdto) {

        Event event = EventMapper.maptoEvent(eventdto);
        Event savedEvent = eventRepo.save(event);
        return EventMapper.maptoEventDto(savedEvent);
    }

    @Override
    public EventDto getEventById(Long eventId) {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(
                        () -> new EventException("Event is not exist with given id : " + eventId));

        return EventMapper.maptoEventDto(event);
    }

    @Override
    public List<EventDto> getAllEvent() {
        List<Event> events = eventRepo.findAll();

        List<EventDto> eventDtos = new ArrayList<>();
        for (Event event : events) {
            eventDtos.add(EventMapper.maptoEventDto(event));
        }

        return eventDtos;
    }
    @Override
    public EventDto updateEvent(Long eventId, EventDto eventDto) {
        Event event = eventRepo.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        event.setId(eventDto.getId());
        event.setDate(eventDto.getDate());
        event.setMenutype(eventDto.getMenutype());
        event.setThemetype(eventDto.getThemetype());
        

        Event updatedEvent = eventRepo.save(event);
        return EventMapper.maptoEventDto(updatedEvent);
    }

    @Override
    public void deleteEvent(Long eventId) {
        eventRepo.deleteById(eventId);
    }
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepo.findAll();
        List<EventDto> eventDtos = new ArrayList<>();
        for (Event event : events) {
            eventDtos.add(EventMapper.maptoEventDto(event));
        }
        return eventDtos;
    }

}

