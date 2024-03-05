package com.example.demo.mapper;

import com.example.demo.dto.EventDto;
import com.example.demo.models.Event;


public class EventMapper {

    public static EventDto maptoEventDto(Event event) {
        return new EventDto(
                event.getId(),
                event.getDate(),
                event.getThemetype(),
                event.getMenutype());
    }

    public static Event maptoEvent(EventDto eventdto) {
        return new Event(
            eventdto.getId(),
            eventdto.getDate(),
            eventdto.getThemetype(),
            eventdto.getMenutype());
    }

}
