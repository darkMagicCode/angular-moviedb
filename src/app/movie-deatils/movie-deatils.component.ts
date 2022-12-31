import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-deatils',
  templateUrl: './movie-deatils.component.html',
  styleUrls: ['./movie-deatils.component.scss']
})
export class MovieDeatilsComponent implements OnInit {
  itemDetails:any;
  similerMov: any[] = [];
  mediaType: string = '';
  imgpath: string = '';
  seeMoreNum: number = 0;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _MoviesService:MoviesService ) { }
  seeMore() {

this.seeMoreNum+=5
  };
  
  // id: number | null = null;
  // type: string | null = null;

  ngOnInit(): void {
    console.log('onit');
    
    this.seeMore();
    let { id, type } = this._ActivatedRoute.snapshot.params;
    // this._ActivatedRoute.paramMap.subscribe((paramMap) => {
    //   this.id =Number(paramMap.get('id')) 
    // })
    // this._ActivatedRoute.paramMap.subscribe((paramMap) => {
    //   this.type =paramMap.get('type')
    // })
    this.mediaType = type;
    this._MoviesService.getTrandingDeatils(id, type).subscribe({next:(data)=> this.itemDetails= data });
    this.imgpath = this._MoviesService.imgpath;
    this._MoviesService.getSimilerMov(id, type).subscribe({ next: (data) => this.similerMov = data.results });
    
  }













  getSimiler(id:string,type:string) {
    this._MoviesService.getSimilerMov(id, type).subscribe({ next: (data) => this.similerMov = data.results });
    this._MoviesService.getTrandingDeatils(id, type).subscribe({next:(data)=> this.itemDetails= data });
    this.imgpath = this._MoviesService.imgpath;
  }
  



}
