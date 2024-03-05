package com.example.demo.Services;

import java.util.List;

import com.example.demo.dto.PaymentDto;

public interface PaymentService {
    PaymentDto createPayment(PaymentDto paymentDto);

    PaymentDto getPaymentById(Long paymentId);

    List<PaymentDto> getAllPayment();
}
