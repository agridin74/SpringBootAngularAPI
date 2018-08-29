import { Component, OnInit } from '@angular/core';
import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-flower',
  templateUrl: './add-flower.component.html',
  styleUrls: ['./add-flower.component.css']
})
export class AddFlowerComponent implements OnInit {
  
  flower = new Flower();
  submitted = false;

  constructor(
    private flowerService: FlowerService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  
  newFlower(): void {
    this.submitted = false;
    this.flower = new Flower();
  }
  
  addFlower(){
    this.submitted = true;
    this.save();
  }
  
  goBack(): void {
    this.location.back();
  }
  
  private save(): void {
    this.flowerService.addFlower(this.flower)
      .subscribe();
  }

}
