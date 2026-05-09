package com.safarswap.backend.repository;

import com.safarswap.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository
        extends MongoRepository<User, String> {

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}