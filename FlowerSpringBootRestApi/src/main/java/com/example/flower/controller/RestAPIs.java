package com.example.flower.controller;
import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.*;
import com.example.flower.model.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RestAPIs {
	private Map<Long, Flower> flowers = new HashMap<Long, Flower>(){
		private static final long serialVersionUID = 1L;
		
		{
			put(1L, new Flower(1L, "Flower1","Flower1 desc",1));
			put(2L, new Flower(2L, "Flower2","Flower2 desc",2));
			put(3L, new Flower(3L, "Flower3","Flower3 desc",3));
			put(4L, new Flower(4L, "Flower4","Flower4 desc",4));
			put(5L, new Flower(5L, "Flower5","Flower5 desc",5));
			put(6L, new Flower(6L, "Flower6","Flower6 desc",6));
			put(7L, new Flower(7L, "Flower7","Flower7 desc",7));
			put(8L, new Flower(8L, "Flower8","Flower8 desc",8));
			put(9L, new Flower(9L, "Flower9","Flower9 desc",9));
		}
	};
	
	@GetMapping(value="/api/flowers")
	public List<Flower> getAll(){
		List<Flower> res = flowers.entrySet().stream()
							.map(entry -> entry.getValue())
							.collect(Collectors.toList());
		return res;
	}
	
	@GetMapping(value="api/flowers/{id}")
	public Flower getFlower(@PathVariable Long id) {
		return flowers.get(id);
	}
	
	@PostMapping(value="/api/flowers")
	public Flower postFlower(@RequestBody Flower flower) {
		Entry<Long, Flower> maxByKey = flowers.entrySet()
				.stream()
				.reduce((curr, nxt) -> curr.getKey() > nxt.getKey() ? curr : nxt)
				.get();
		Long nextId = (long) (maxByKey.getKey() + 1);
		flower.setId(nextId);
		flowers.put(nextId, flower);
		return flower;
	}
	
	@PutMapping(value="api/flowers")
	public void putFlower(@RequestBody Flower flower) {
		flowers.replace(flower.getId(), flower);
	}
	
	@DeleteMapping(value="/api/flowers/{id}")
	public void deleteFlower(@PathVariable Long id) {
		flowers.remove(id);
	}
}
