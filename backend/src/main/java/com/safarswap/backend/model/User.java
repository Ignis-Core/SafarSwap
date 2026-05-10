
    package com.safarswap.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

    @Data
    @Document(collection = "users")
    public class User {

        @Id
        private String id;

        private String name;
        private int age;
        private String gender;

        @Indexed(unique = true)
        private String phone;

        private String city;

        @Indexed(unique = true)
        private String email;
        private String password;
        private double rating=5.0;
        private int totalRatings=0;
    }

