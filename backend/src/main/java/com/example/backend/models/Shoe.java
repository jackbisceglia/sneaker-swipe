package com.example.backend.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Value;

import java.math.BigInteger;

@Entity
@Table(name = "shoe")
public class Shoe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "shoe_id")
    private int shoe_id;

    @Column(name = "shoe_name")
    private String shoe_name;

    @Column(name = "shoe_link")
    private String shoe_link;

    @Column(name = "num_upvotes", nullable = false)
    private Integer num_upvotes = 0;

    @Column(name = "num_downvotes", nullable = false)
    private Integer num_downvotes = 0;

    public int getShoe_id() {
        return shoe_id;
    }

    public void setShoe_id(int shoe_id) {
        this.shoe_id = shoe_id;
    }

    public String getShoe_name() {
        return shoe_name;
    }

    public void setShoe_name(String shoe_name) {
        this.shoe_name = shoe_name;
    }

    public String getShoe_link() {
        return shoe_link;
    }

    public void setShoe_link(String shoe_link) {
        this.shoe_link = shoe_link;
    }

    public Integer getNum_upvotes() {
        return num_upvotes;
    }

    public void setNum_upvotes(Integer num_upvotes) {
        this.num_upvotes = num_upvotes;
    }

    public Integer getNum_downvotes() {
        return num_downvotes;
    }

    public void setNum_downvotes(Integer num_downvotes) {
        this.num_downvotes = num_downvotes;
    }
}