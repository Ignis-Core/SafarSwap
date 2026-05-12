package com.safarswap.backend.repository;

import com.safarswap.backend.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TicketRepository extends MongoRepository<Ticket, String> {

    List<Ticket> findByFromLocationAndToLocation(String from, String to);

    List<Ticket> findBySellerEmail(String sellerEmail);

    List<Ticket> findByBuyerEmail(String buyerEmail);
    List<Ticket> findBySoldFalse();
    List<Ticket> findBySoldFalseAndOperatorApprovedTrue();
}