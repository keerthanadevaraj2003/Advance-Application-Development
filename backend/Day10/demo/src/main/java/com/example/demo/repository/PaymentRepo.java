package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Payment;

public interface PaymentRepo extends JpaRepository<Payment, Long> {

}
