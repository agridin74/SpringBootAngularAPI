package com.example.flower.model;

public class Flower {
	private Long id;
	private String name;
	private String description;
	private double price;
	
	public Flower() {
		
	}
	
	public Flower(String name, String description, double price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}
	
	public Flower(Long id, String name, String description, double price) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
