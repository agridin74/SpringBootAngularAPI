import { Component, OnInit } from '@angular/core';
import { Flower } from '../flower';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  flowers: Flower[];
  
  constructor(private flowerService: FlowerService) { }

  ngOnInit(): void {
    this.getFlowers();
  }
  
  getFlowers(){
    return this.flowerService.getFlowers()
      .subscribe(
        flowers => {
          console.log(flowers);
          this.flowers = flowers;
        }
      );
  }

}
