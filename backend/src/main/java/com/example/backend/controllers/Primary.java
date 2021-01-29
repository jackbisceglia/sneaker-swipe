package com.example.backend.controllers;

import com.example.backend.models.Shoe;
import com.example.backend.repositories.ShoeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@Controller
public class Primary {
    @Autowired
    ShoeRepository shoeRepository;

    @GetMapping("/")
    public String homePage() {
        return "works correctly";
    }

    @GetMapping("/getShoes")
    public Iterable<Shoe> getShoes() {
        return shoeRepository.findAll();
    }

    @GetMapping("updateVote/{type}/{shoeid}")
    public Shoe updateVote(@PathVariable("type") String type, @PathVariable("shoeid") int shoe_id){
        Shoe shoeToUpdate = shoeRepository.findById(shoe_id).get();

        if (type.equals("increment")){
            shoeToUpdate.setNum_upvotes(shoeToUpdate.getNum_upvotes() + 1);
        }
        else{
            shoeToUpdate.setNum_downvotes(shoeToUpdate.getNum_downvotes() + 1);
        }
        shoeRepository.save(shoeToUpdate);
        return shoeToUpdate;

    }

    @PostMapping("/addShoe")
    public Shoe addShoe(@RequestBody Shoe shoe) {
        return shoeRepository.save(shoe);
    }
}