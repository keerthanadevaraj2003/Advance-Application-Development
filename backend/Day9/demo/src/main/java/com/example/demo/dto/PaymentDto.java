package com.example.demo.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class PaymentDto {

    private Long id;

    private String themetype;

    private String menutype;

    private int price;

    private String paymentmethod;
}

