import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from './../services/moviesapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  treindingMovies: any[] = [];
  treindingTv: any[] = [];
  treindingPeople: any[] = [];
  imgPath: string = this._MoviesapiService.imgPrefix;
  ngOnInit(): void {
    this.homeMovies();
  }
  homeMovies(): void {
    this._MoviesapiService.getTrending('movie').subscribe({
      next: (response) => {
        console.log(response.results);
        this.treindingMovies = response.results.slice(0, 10);
      },
      complete: () => {
        this._MoviesapiService.getTrending('tv').subscribe({
          next: (response) => {
            console.log(response.results);
            this.treindingTv = response.results.slice(0, 10);
          },
          complete: () => {
            this._MoviesapiService.ouerLatestMovies.next([
              ...this.treindingMovies,
              ...this.treindingTv,
            ]);
            this._MoviesapiService.getTrending('person').subscribe({
              next: (response) => {
                console.log(response.results);
                this.treindingPeople = response.results.slice(0, 10);
              },
            });
          },
        });
      },
    });
  }
}
