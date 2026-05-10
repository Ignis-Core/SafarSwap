package com.safarswap.backend.controller;

import com.safarswap.backend.model.Ticket;
import com.safarswap.backend.repository.TicketRepository;
import com.safarswap.backend.service.TicketService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.safarswap.backend.jwt.JwtUtil;
import com.safarswap.backend.model.User;
import com.safarswap.backend.repository.UserRepository;

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
    @Autowired
    private UserRepository userRepository;






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

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow();

        ticket.setSellerId(user.getId());

        ticket.setSellerName(user.getName());

        ticket.setSellerRating(
                user.getRating()
        );

        ticket.setSellerGender(
                user.getGender()
        );

        return ticketRepository.save(ticket);
    }


    @PostMapping("/book/{id}")
    public String bookTicket(
            @PathVariable String id,
            @RequestHeader("Authorization") String authHeader
    ) {

        String token =
                authHeader.substring(7);

        String buyerEmail =
                jwtUtil.extractClaims(token)
                        .getSubject();

        Ticket ticket =
                ticketRepository.findById(id)
                        .orElse(null);

        if (ticket == null) {
            return "Ticket not found ❌";
        }

        if (ticket.isSold()) {
            return "Ticket already sold ❌";
        }

        if (ticket.getSellerEmail()
                .equals(buyerEmail)) {

            return "You cannot buy your own ticket ❌";
        }

        ticket.setSold(true);

        ticket.setBuyerEmail(buyerEmail);

        ticketRepository.save(ticket);

        return "Ticket booked successfully ✅";
    }
    @GetMapping("/my-sales")
    public List<Ticket> mySales(
            HttpServletRequest request
    ) {

        String authHeader =
                request.getHeader("Authorization");

        String token =
                authHeader.substring(7);

        String email =
                jwtUtil.extractEmail(token);

        return ticketRepository
                .findBySellerEmail(email);
    }@GetMapping("/my-purchases")
    public List<Ticket> myPurchases(
            HttpServletRequest request
    ) {

        String authHeader =
                request.getHeader("Authorization");

        String token =
                authHeader.substring(7);

        String email =
                jwtUtil.extractEmail(token);

        return ticketRepository
                .findByBuyerEmail(email);
    }@GetMapping("/all")
    public List<Ticket> getAllTickets() {
        return ticketService.getAvailableTickets();
    }
}