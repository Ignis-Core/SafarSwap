package com.safarswap.backend.controller;

import com.safarswap.backend.dto.LoginRequest;
import com.safarswap.backend.jwt.JwtUtil;
import com.safarswap.backend.model.User;
import com.safarswap.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return "User already exists ❌";
        }

        userRepository.save(user);

        return "User registered successfully ✅";
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
                    .body("Invalid email ❌");
        }

        User user = userOptional.get();

        if (!user.getPassword()
                .equals(request.getPassword())) {

            return ResponseEntity
                    .status(401)
                    .body("Wrong password ❌");
        }

        String token =
                jwtUtil.generateToken(user.getEmail());

        return ResponseEntity.ok(token);
    }
    @GetMapping("/profile")
    public String profile() {

        return "Protected Profile API ✅";
    }
}