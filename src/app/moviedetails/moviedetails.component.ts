import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import{MoviesService} from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
myPram:number;
movieDetails;

  constructor(private _ActivatedRoute:ActivatedRoute , public _MoviesService:MoviesService) { }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe((params) => this.myPram = params['id']);
    this._MoviesService.getMovies(1).subscribe(data => {this.movieDetails = data.results[this.myPram]})

  }

}
