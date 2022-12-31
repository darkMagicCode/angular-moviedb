import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-cur',
  templateUrl: './owl-cur.component.html',
  styleUrls: ['./owl-cur.component.scss']
})
export class OwlCurComponent implements OnInit {
  @Input() item: any[]=[];

  imgpath: string = 'https://image.tmdb.org/t/p/w500/';
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 5
      },
      740: {
        items: 6
      },
      940: {
        items:8
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void { 
    
  
  
  
  }

}
