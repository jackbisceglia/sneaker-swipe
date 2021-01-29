package com.example.backend.repositories;

import com.example.backend.models.Shoe;
import org.springframework.data.repository.CrudRepository;

public interface ShoeRepository extends CrudRepository<Shoe, Integer> {
}
