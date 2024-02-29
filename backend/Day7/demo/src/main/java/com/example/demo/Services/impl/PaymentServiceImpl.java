package com.example.demo.Services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PaymentDto;
import com.example.demo.models.Payment;
import com.example.demo.exception.PaymentException;
import com.example.demo.mapper.PaymentMapper;
import com.example.demo.repository.PaymentRepo;
import com.example.demo.Services.PaymentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private PaymentRepo paymentRepo;

    @Override
    public PaymentDto createPayment(PaymentDto paymentdto) {

        Payment payment = PaymentMapper.maptoPayment(paymentdto);
        Payment savedPayment = paymentRepo.save(payment);
        return PaymentMapper.maptoPaymentDto(savedPayment);
    }

    @Override
    public PaymentDto getPaymentById(Long paymentId) {
        Payment payment = paymentRepo.findById(paymentId)
                .orElseThrow(
                        () -> new PaymentException("Payment is not exist with given id : " + paymentId));

        return PaymentMapper.maptoPaymentDto(payment);
    }

    @Override
    public List<PaymentDto> getAllPayment() {
        List<Payment> payments = paymentRepo.findAll();

        List<PaymentDto> paymentDtos = new ArrayList<>();
        for (Payment payment : payments) {
            paymentDtos.add(PaymentMapper.maptoPaymentDto(payment));
        }

        return paymentDtos;
    }

}

