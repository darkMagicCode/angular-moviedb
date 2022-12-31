import { MovieTrend } from './../movie-trend';
import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { InterMovDetils } from '../inter-mov-detils';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {









  seeeMore : any = {
    tv: 10,
    people:10,
    movie:10
  }

  seeMoreFun(element: EventTarget | null): void{
    let category  =  `${(<HTMLElement>element)?.dataset['seeMore']}`
    this.seeeMore[`${category}`] += 10;
        this.seelessToggle = true;
  }

  seelessToggle: boolean = false;

  seeLessFun(element: EventTarget | null): void{
    let category = element as HTMLElement;
    let cat = category.dataset['seeMore'];
    this.seeeMore[`${cat}`]= 10;
    this.seelessToggle = false;    
  }



  pages: any = 1;

  trendingMovie: MovieTrend[] = [];
  trndingTv: MovieTrend[] = [];
  trndingPeople: InterMovDetils[] = [];
  imgpath: string = 'https://image.tmdb.org/t/p/w500/';
  
  constructor(private _MoviesService: MoviesService) { }
  

  next(element: EventTarget | null)
  {
    let x = this.pages += 1
    let category = element as HTMLElement;
    let cat = category.dataset['nextPage'];
    console.log(cat);

    if (cat == 'movie')
    {
      this._MoviesService.getTranding(cat, x).subscribe((data) => {

        return this.trendingMovie = data.results.filter((item: any) => item.poster_path !== null)
      });

    }
    else if (cat == 'tv')
    {
      this._MoviesService.getTranding(cat, x).subscribe((data) => {
      return this.trndingTv = data.results.filter((item: any) => item.poster_path !== null)
    });}
  };

  
  previous(element: EventTarget | null)
  {
    let x = this.pages-=1
    let category = element as HTMLElement;
    let cat = category.dataset['prevPage'];
    console.log(cat);
    if (cat == 'movie')
    {
      this._MoviesService.getTranding(cat, x).subscribe((data) =>
      {
        return this.trendingMovie = data.results.filter((item: any) => item.poster_path !== null)
      });
    }
    else if (cat == 'tv') {
      this._MoviesService.getTranding(cat, x).subscribe((data) =>
      {
      return this.trndingTv = data.results.filter((item: any) => item.poster_path !== null)
    });
    }
  };


  
  ngOnInit(): void {

    this._MoviesService.getTranding('movie').subscribe((data) => {

      return this.trendingMovie = data.results.filter((item: any) =>  item.poster_path !== null )

    })
    this._MoviesService.getTranding('tv').subscribe((data) => {

      return this.trndingTv = data.results.filter((item: any) =>  item.poster_path !== null )

    })
    this._MoviesService.getTranding('person').subscribe((data) => {

      return this.trndingPeople = data.results.filter((item: any) =>  item.profile_path !== null );

    })

  }

}
