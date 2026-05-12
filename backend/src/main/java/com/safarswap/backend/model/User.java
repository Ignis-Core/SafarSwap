
    package com.safarswap.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;
import jakarta.validation.constraints.*;

    @Data
    @Document(collection = "users")
    public class User {
        @Id
        private String id;
        @NotBlank(message = "Name required")
        private String name;

        @Min(
                value = 18,
                message = "Age must be 18+"
        )
        private int age;

        @NotBlank(message = "Gender required")
        private String gender;

        @Indexed(unique = true)

        @NotBlank(message = "Phone required")
        private String phone;

        @NotBlank(message = "City required")
        private String city;

        @Indexed(unique = true)

        @Email(message = "Invalid email")

        @NotBlank(message = "Email required")
        private String email;

        @NotBlank(message = "Password required")
        private String password;

        private double rating = 5.0;

        private int totalRatings = 0;

        public String getId() {
            return id;
        }
    }

