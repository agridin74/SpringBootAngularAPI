import { Component, OnInit } from '@angular/core';
import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {
  flower = new Flower();
  submitted = false;
  message: string;
  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flowerService.getFlower(id)
      .subscribe(flower => this.flower=flower);
  }
  
  update(): void {
    this.submitted = true;
    this.flowerService.updateFlower(this.flower)
      .subscribe(() => this.message = "Flower updated successfully!");
  }
  
  delete(): void {
    this.submitted = true;
    this.flowerService.deleteFlower(this.flower.id)
      .subscribe(()=> this.message="Flower deleted successfully!!!");
  }
  
  goBack(): void { 
    this.location.back();
  }

}
