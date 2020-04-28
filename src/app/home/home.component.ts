import { Component, OnInit } from '@angular/core';
import{MoviesService}from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

currentPageNumber:number =1;



pages:number[] = [1,2,3,4,5,6,7,8];
  allMovies:any[];
  imgPrefix:string ='http://image.tmdb.org/t/p/w500';
  constructor(public _MoviesService:MoviesService) {

_MoviesService.getMovies(this.currentPageNumber).subscribe(data =>{
  this.allMovies = data.results;
})

}
changePage(num)
{
  this.currentPageNumber =num;
  this._MoviesService.getMovies(this.currentPageNumber).subscribe(data =>{
    this.allMovies = data.results;
  })
}


  ngOnInit() {
  }

}
