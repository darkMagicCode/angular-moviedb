import { InterMovDetils } from './../inter-mov-detils';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  itemDetails:InterMovDetils = {} as InterMovDetils;
  imgpath: string = '';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {
      
   }

  ngOnInit(): void {
    let { id, type } = this._ActivatedRoute.snapshot.params;
    this._MoviesService.getTrandingDeatils(id, type).subscribe({ next: (data) => this.itemDetails = data });
    this.imgpath = this._MoviesService.imgpath;

  }

}
