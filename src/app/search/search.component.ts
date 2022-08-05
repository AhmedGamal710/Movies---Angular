import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from './../services/moviesapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  imgPath: string = this._MoviesapiService.imgPrefix;
  trendingMovies: any[] = [];
  ngOnInit(): void {}
  getSearch(keyWord:string) {
  if(keyWord.length > 0 ) {
    this._MoviesapiService.getSearch(keyWord).subscribe({
      next: (response) => {
        console.log(response.results);
        this.trendingMovies = response.results;
      },
    });
  }
  }
}
