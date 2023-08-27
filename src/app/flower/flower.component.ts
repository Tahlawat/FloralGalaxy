import { Component, Input, OnInit} from '@angular/core';
import {Flower} from '../types/Flower';
import { ActivatedRoute } from '@angular/router';
export interface FlowerData {
  name: string;
  price: number;
  image:string;
}


@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  constructor(private route: ActivatedRoute){
  }

  public flowerData:any;
ngOnInit() {
  this.route.data.subscribe(data => {
    
    this.flowerData = data[0];
    console.log(this.flowerData);
  });
}


  @Input() flower: Flower = {} as Flower;
  addToCart(){
    console.log(this.flower);
  }
}
