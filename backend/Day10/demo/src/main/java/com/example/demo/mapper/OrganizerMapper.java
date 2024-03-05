package com.example.demo.mapper;

import com.example.demo.dto.OrganizersDto;
import com.example.demo.models.Organizers;


public class OrganizerMapper {

    public static OrganizersDto maptoOrganizerDto(Organizers organizer) {
        return new OrganizersDto(
                organizer.getId(),
                organizer.getIdentity(),
                organizer.getName(),
                organizer.getContact(),
                organizer.getEventno());
    }

    public static Organizers maptoOrganizers(OrganizersDto organizersdto) {
        return new Organizers(
                organizersdto.getId(),
                organizersdto.getIdentity(),
                organizersdto.getName(),
                organizersdto.getContact(), 
                organizersdto.getEventno());
    }

}
