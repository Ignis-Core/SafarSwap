package com.safarswap.backend.repository;

import com.safarswap.backend.model.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TicketRepository extends MongoRepository<Ticket, String> {

    List<Ticket> findByFromLocationAndToLocation(String from, String to);
    /* List<Ticket> findByFromAndTo(String from,String to); */
}