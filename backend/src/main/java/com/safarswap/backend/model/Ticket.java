package com.safarswap.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Document(collection = "tickets")
public class Ticket {

    @Id
    private String id;

    private String fromLocation;
    private String toLocation;
    private String date;
    private String time;


    private String seatNumber;

    private String sellerEmail;
    private boolean sold;

    private String buyerEmail;

    private String sellerId;
    private String sellerName;
    private double sellerRating;
    private String sellerGender;
    private boolean safeForFemale;

    private LocalDate travelDate;
    private LocalTime departureTime;
    private boolean operatorApproved=false;
    private double price;
    private double originalPrice;

    private int reportCount = 0;

    private boolean blocked = false;

    private boolean rated=false;
}