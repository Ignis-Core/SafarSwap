package com.safarswap.backend.controller;

import com.safarswap.backend.dto.LoginRequest;
import com.safarswap.backend.jwt.JwtUtil;
import com.safarswap.backend.model.Ticket;
import com.safarswap.backend.model.User;
import com.safarswap.backend.repository.TicketRepository;
import com.safarswap.backend.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import jakarta.validation.Valid;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {


    @Autowired
    private TicketRepository ticketRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public String signup(@Valid @RequestBody User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return "User already exists ";
        }
ticket.setRated(true);
        ticketRepository.save(ticket);
        userRepository.save(user);

        return "User registered successfully ";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request
    ) {

        Optional<User> userOptional =
                userRepository.findByEmail(
                        request.getEmail()
                );

        if (userOptional.isEmpty()) {

            return ResponseEntity
                    .status(401)
                    .body("Invalid email ");
        }

        User user = userOptional.get();

        if (!user.getPassword()
                .equals(request.getPassword())) {

            return ResponseEntity
                    .status(401)
                    .body("Wrong password ");
        }

        String token =
                jwtUtil.generateToken(user.getEmail());

        return ResponseEntity.ok(token);
    }
    @GetMapping("/profile")
    public String profile() {

        return "Protected Profile API ✅";
    }
    @PostMapping("/reset-password")
    public String resetPassword(
            @RequestBody Map<String, String> body
    ) {

        String email = body.get("email");

        return "Reset link sent to " + email;
    }@DeleteMapping("/delete")
    public String deleteAccount(
            HttpServletRequest request
    ) {

        String authHeader =
                request.getHeader("Authorization");

        String token =
                authHeader.substring(7);

        String email =
                jwtUtil.extractEmail(token);

        User user =
                userRepository
                        .findByEmail(email)
                        .orElseThrow();

        userRepository.delete(user);

        return "Account deleted";
    }
    @PostMapping("/rate/{sellerId}")
    public String rateSeller(

            @PathVariable String sellerId,

            @RequestParam int rating,

            @RequestParam String ticketId,

            @RequestHeader("Authorization")
            String authHeader
    ) {

        String token =
                authHeader.substring(7);

        String buyerEmail =
                jwtUtil.extractEmail(token);

        User seller =
                userRepository
                        .findById(sellerId)
                        .orElse(null);

        if (seller == null) {

            return "Seller not found";
        }

        // ❌ prevent self rating
        if (
                seller.getEmail()
                        .equals(buyerEmail)
        ) {

            return "You cannot rate yourself";
        }
        if(ticket.isRated()){
            return "You already rated this seller";}
        }
        Ticket ticket =
                ticketRepository
                        .findById(ticketId)
                        .orElse(null);

        if (ticket == null) {

            return "Ticket not found";
        }

        // ⭐ calculate new average
        double newRating = (

                seller.getRating()
                        *
                        seller.getTotalRatings()

                        + rating

        ) / (

                seller.getTotalRatings()
                        + 1
        );

        seller.setRating(newRating);

        seller.setTotalRatings(
                seller.getTotalRatings()
                        + 1
        );

        userRepository.save(seller);

        return "Rating added successfully";
    }
}