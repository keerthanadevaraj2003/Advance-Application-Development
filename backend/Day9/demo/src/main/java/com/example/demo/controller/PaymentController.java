package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PaymentDto;
import com.example.demo.Services.PaymentService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    private PaymentService paymentService;

    // Build Add Employee REST API
    @PostMapping("/create")
    public ResponseEntity<PaymentDto> createPayment(@RequestBody PaymentDto paymentDto) {
        PaymentDto savedUser = paymentService.createPayment(paymentDto);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<PaymentDto> getPaymentId(@PathVariable("id") Long paymentId) {
        PaymentDto paymentDto = paymentService.getPaymentById(paymentId);
        return ResponseEntity.ok(paymentDto);
    }

    // Build Get All Employee REST API
    @GetMapping("/all")
    public ResponseEntity<List<PaymentDto>> getAllPayment() {
        List<PaymentDto> payments = paymentService.getAllPayment();
        return ResponseEntity.ok(payments);
    }

}
