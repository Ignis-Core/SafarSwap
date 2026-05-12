package com.safarswap.backend.service;

import com.safarswap.backend.model.Ticket;
import com.safarswap.backend.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;
    public List<Ticket> getMySales(String email) {

        return ticketRepository.findBySellerEmail(email);
    }

    public Ticket sellTicket(Ticket ticket) {
        ticket.setSold(false);
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }
    public List<Ticket> getMyPurchases(String email) {

        return ticketRepository.findByBuyerEmail(email);
    }

    public List<Ticket> searchTickets(String from, String to) {
        return ticketRepository.findByFromLocationAndToLocation(from, to);
    }
    public String buyTicket(String ticketId) {

        Ticket ticket = ticketRepository.findById(ticketId).orElse(null);

        if (ticket == null) {
            return "Ticket not found ❌";
        }

        if (ticket.isSold()) {
            return "Ticket already sold ❌";
        }

        ticket.setSold(true);
        ticketRepository.save(ticket);

        return "Ticket booked successfully ✅";
    }

    public List<Ticket> getAvailableTickets() {

        return ticketRepository
                .findBySoldFalseAndOperatorApprovedTrue();
    }
}