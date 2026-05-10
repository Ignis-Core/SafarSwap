package com.safarswap.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "tickets")
public class Ticket {

    @Id
    private String id;

    private String fromLocation;
    private String toLocation;
    private String date;
    private String time;

    private double price;
    private String seatNumber;

    private String sellerEmail;
    private boolean sold;

    private String buyerEmail;

    private String sellerId;
    private String sellerName;
    private double sellerRating;
    private String sellerGender;
    private boolean safeForFemale;
}