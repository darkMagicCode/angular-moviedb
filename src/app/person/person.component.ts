import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() item:any;

  constructor(private _MoviesService:MoviesService) { }
  imgpath: string = '';
  
  ngOnInit(): void {
    
   this. imgpath = this._MoviesService.imgpath
  }

}
