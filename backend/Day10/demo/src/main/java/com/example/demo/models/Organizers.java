package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Organizers")
public class Organizers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Identity", nullable = false)
    private int identity;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "Contact_no", nullable = false)
    private String contact;

    @Column(name = "Event_no", nullable = false)
    private int eventno ;
}

