package com.example.demo.Services;

import java.util.List;

import com.example.demo.dto.EventDto;

public interface EventService {
    EventDto createEvent(EventDto eventDto);

    EventDto getEventById(Long eventId);

    List<EventDto> getAllEvent();

    EventDto updateEvent(Long eventId, EventDto eventDto);

    void deleteEvent(Long eventId);
}
