import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }
  imgpath: string = 'https://image.tmdb.org/t/p/w500/';


  
  getTranding(media_type='movie'  , page = 1):Observable<any> {
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media_type}/day?api_key=&language=en-US&page=${page}`)
}



  getTrandingDeatils(id:any,type:any):Observable<any> {
  return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=&language=en-US`)
}


  getSimilerMov(id:any,type:any):Observable<any> {
  return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=&language=en-US&page=1`)
}











}
