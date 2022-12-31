import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {
  @Input() item: any;
  constructor(private _MoviesService:MoviesService) { }
  imgpath: string = '';
  ngOnInit(): void {
   this. imgpath = this._MoviesService.imgpath
  }

}
