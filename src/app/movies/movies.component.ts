import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesapiService } from './../services/moviesapi.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit,OnDestroy {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _MoviesapiService:MoviesapiService
  ) {}
  trendingMovies!: any[];
  moviesSubscrip: Subscription = new Subscription();
  imgPath:string = this._MoviesapiService.imgPrefix;
  PagNumArray!: number[]; // to create pagination number by array
  totalPages!: number; // response.total_pages;
  curentPaginationClick: number = 1;
  ngOnInit(): void {
    this.getMovies(this.activatePageNum());
  }
  ngOnDestroy(): void {
    this.moviesSubscrip.unsubscribe();
  }
  activatePageNum(): any {
    // get ativate route params
    return parseInt(this._ActivatedRoute.snapshot.params['page']) <= 0
      ? (this._Router.navigate(['/movies/1']), 1)
      : parseInt(this._ActivatedRoute.snapshot.params['page']);
  }
  getMovies(number: number): void {
    setTimeout(() => {
      this.moviesSubscrip = this._MoviesapiService
        .getMovieByPagination('movie', number)
        .subscribe({
          next: (response) => {
            this.trendingMovies = response.results;
            this.totalPages = response.total_pages;
            if (this.totalPages >= 11 && this.totalPages >= number) {
              console.log('true1', number, this.totalPages);

              if (number >= this.totalPages) {
                console.log('true');

                this.PagNumArray = new Array(6)
                  .fill(number > 5 ? number - 5 : (number = 1))
                  .map((a, b) => {
                    if (a + b > this.totalPages) {
                      return a - b;
                    } else {
                      return a + b;
                    }
                  });
              } else {
                this.PagNumArray = new Array(11)
                  .fill(number > 5 ? number - 5 : (number = 1))
                  .map((a, b) => {
                    return a + b;
                  });
              }
            } else if (this.totalPages < 11 && this.totalPages > number) {
              this.PagNumArray = new Array(this.totalPages)
                .fill(number > 5 ? number - 5 : number)
                .map((a, b) => a + b);
            }
          },
          complete: () => {
            this._MoviesapiService.shardPageNumberMo.next(this.activatePageNum()); // send activate number to shard movie service
          },
          error: (error) => {
            alert(`Page Not Found : ${error.error.errors[0]}`);
            this._Router.navigate(['/movies/1']).finally(() => {
              this.getMovies(this.activatePageNum());
            });
          },
        });
    }, 500);
  }
  changePageUrl(e: any): void {
    this.curentPaginationClick = parseInt(e); // Get Number When Click in pagination inner Httml
    // to unsubscript
    this.getMovies(this.curentPaginationClick);
  }
  // to prev page
  // pervPage(): void {
  //   if (this.activatePageNum() > 1) {
  //     let curentActivate: number = this.activatePageNum();
  //     this._Router
  //       .navigate([`/movies/${(curentActivate -= 1)}`])
  //       .finally(() => {
  //         this.getMovies(this.activatePageNum());
  //       });
  //   }
  // }
  // to next page
  // nextPage(): void {
  //   if (this.totalPages > this.activatePageNum()) {
  //     let curentActivate: number = this.activatePageNum();
  //     this._Router
  //       .navigate([`/movies/${(curentActivate += 1)}`])
  //       .finally(() => {
  //         this.getMovies(this.activatePageNum());
  //       });
  //   }
  // }
}
