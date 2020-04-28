import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpCllient:HttpClient) { }


  getMovies(pageNumber):Observable<any>
  {
    return this._HttpCllient.get("https://api.themoviedb.org/3/trending/all/day?api_key=6f57fb2dc22fec6c13787a24aa8af8e2&page="+pageNumber);
  }
}
