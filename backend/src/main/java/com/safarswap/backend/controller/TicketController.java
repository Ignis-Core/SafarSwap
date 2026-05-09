package com.safarswap.backend.controller;

import com.safarswap.backend.model.Ticket;
import com.safarswap.backend.repository.TicketRepository;
import com.safarswap.backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.safarswap.backend.jwt.JwtUtil;

import java.util.List;


@RestController
@RequestMapping("/ticket")
public class TicketController {
    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private TicketService ticketService;
    @Autowired
    private JwtUtil jwtUtil;




    @PostMapping("/sell")
    public Ticket sellTicket(@RequestBody Ticket ticket) {
        return ticketService.sellTicket(ticket);
    }


    @GetMapping("/search")
    public List<Ticket> searchTickets(@RequestParam String from,
                                      @RequestParam String to) {
        return ticketService.searchTickets(from, to);
    }
    @PostMapping("/buy/{id}")
    public String buyTicket(@PathVariable String id) {
        return ticketService.buyTicket(id);
    }
    @PostMapping("/add")
    public Ticket addTicket(
            @RequestBody Ticket ticket,
            @RequestHeader("Authorization") String authHeader
    ) {

        String token =
                authHeader.substring(7);

        String email =
                jwtUtil.extractClaims(token).getSubject();

        ticket.setSellerEmail(email);

        return ticketRepository.save(ticket);
    }

    @GetMapping("/all")
    public List<Ticket> getAllTickets() {

        return ticketRepository.findAll();
    }
    @PostMapping("/book/{id}")
    public String bookTicket(
            @PathVariable String id,
            @RequestHeader("Authorization") String authHeader
    ) {

        Ticket ticket =
                ticketRepository.findById(id).orElse(null);

        if (ticket == null) {
            return "Ticket not found ❌";
        }

        if (ticket.isSold()) {
            return "Ticket already booked ❌";
        }

        String token =
                authHeader.substring(7);

        String buyerEmail =
                jwtUtil.extractClaims(token).getSubject();

        ticket.setSold(true);

        ticket.setBuyerEmail(buyerEmail);

        ticketRepository.save(ticket);

        return "Ticket booked successfully ✅";
    }
}