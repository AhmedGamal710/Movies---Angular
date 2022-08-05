import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesapiService {
  constructor(private http: HttpClient) {}
  shardPageNumberMo: BehaviorSubject<any> = new BehaviorSubject(1);
  shardPageNumberTv: BehaviorSubject<any> = new BehaviorSubject(1);
  shardPageNumberPer: BehaviorSubject<any> = new BehaviorSubject(1);
  ouerLatestMovies: BehaviorSubject<any> = new BehaviorSubject(null);
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  getTrending(mediaType: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=48d62e7452a1f1a5e6018217ac27c50a`
    );
  }
  getDetailsId(id: string | null, type: string | null): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US`
    );
  }
  getMovieByPagination(type: string, page: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/discover/${type}?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
  }
  // get people by page number
  getPeople(pageNumber: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/popular?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&page=${pageNumber}`
    );
  }
  getSearch(keyword:string):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=48d62e7452a1f1a5e6018217ac27c50a&language=en-US&query=${keyword}&page=1&include_adult=false`)
  }
}
