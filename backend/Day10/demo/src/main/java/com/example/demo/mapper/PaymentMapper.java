package com.example.demo.mapper;

import com.example.demo.dto.PaymentDto;
import com.example.demo.models.Payment;

public class PaymentMapper {

    public static PaymentDto maptoPaymentDto(Payment payment) {
        return new PaymentDto(
                payment.getId(),
                payment.getThemetype(),
                payment.getMenutype(),
                payment.getPrice(),
                payment.getPaymentmethod());
    }

    public static Payment maptoPayment(PaymentDto paymentdto) {
        return new Payment(
                paymentdto.getId(),
                paymentdto.getThemetype(),
                paymentdto.getMenutype(),
                paymentdto.getPrice(), 
                paymentdto.getPaymentmethod());
    }

}
