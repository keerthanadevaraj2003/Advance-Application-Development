package com.example.demo.Services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.OrganizersDto;
import com.example.demo.models.Organizers;
import com.example.demo.exception.OrganizerException;
import com.example.demo.mapper.OrganizerMapper;
import com.example.demo.repository.OrganizerRepo;
import com.example.demo.Services.OrganizerService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrganizerServiceImpl implements OrganizerService {

    private OrganizerRepo organizerRepo;

    @Override
    public OrganizersDto createOrganizers(OrganizersDto organizersdto) {

        Organizers organizer = OrganizerMapper.maptoOrganizers(organizersdto);
        Organizers savedOrganizer = organizerRepo.save(organizer);
        return OrganizerMapper.maptoOrganizerDto(savedOrganizer);
    }

    @Override
    public OrganizersDto getOrganizersById(Long organizerId) {
        Organizers organizer = organizerRepo.findById(organizerId)
                .orElseThrow(
                        () -> new OrganizerException("Oganizer is not exist with given id : " + organizerId));

        return OrganizerMapper.maptoOrganizerDto(organizer);
    }

    @Override
    public List<OrganizersDto> getAllOrganizers() {
        List<Organizers>organizers = organizerRepo.findAll();

        List<OrganizersDto> organizerDtos = new ArrayList<>();
        for (Organizers organizer : organizers) {
            organizerDtos.add(OrganizerMapper.maptoOrganizerDto(organizer));
        }

        return organizerDtos;
    }

}


