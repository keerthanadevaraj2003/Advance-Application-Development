package com.example.demo.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrganizersDto {

    private Long id;
   
    private int identity;
  
    private String name;
    
    private String contact;
    
    private int eventno ;
}


