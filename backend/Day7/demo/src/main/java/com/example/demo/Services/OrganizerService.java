package com.example.demo.Services;

import java.util.List;

import com.example.demo.dto.OrganizersDto;

public interface OrganizerService {
    OrganizersDto createOrganizers(OrganizersDto organizersDto);

    OrganizersDto getOrganizersById(Long organizersId);

    List<OrganizersDto> getAllOrganizers();
}
