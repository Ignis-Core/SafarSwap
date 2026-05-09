package com.safarswap.backend.service;

import com.safarswap.backend.model.User;
import com.safarswap.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String signup(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return "User already exists ❌";
        }
        userRepository.save(user);
        return "User registered successfully ✅";
    }

    public String login(User user) {

        Optional<User> optionalUser =
                userRepository.findByEmail(user.getEmail());

        if (optionalUser.isEmpty()) {
            return "User not found ❌";
        }

        User existingUser = optionalUser.get();

        if (!existingUser.getPassword()
                .equals(user.getPassword())) {

            return "Invalid password ❌";
        }

        return "Login successful ✅";
    }
}