import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import { MoviesapiService } from './../services/moviesapi.service';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination,Autoplay]);

@Component({
  selector: 'app-swiper',
  template: `<swiper
    [effect]="'coverflow'"
    [grabCursor]="true"
    [centeredSlides]="true"
    [slidesPerView]="'auto'"
    [loop]="true"
    [autoplay]="{
      delay: 1500,
      disableOnInteraction: false
    }"
    [coverflowEffect]="{
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }"
    [pagination]="false"
    class="mySwiper"
  >
    <ng-template swiperSlide *ngFor="let item of ouerMovies"
      ><img [src]="pathImpg + item.poster_path"
    /></ng-template>
  </swiper>`,
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ouerMovies!: any;
  pathImpg!: string;
  ngOnInit(): void {
    this.pathImpg = this._MoviesapiService.imgPrefix;
    this._MoviesapiService.ouerLatestMovies.subscribe({
      next: () => {
        this.ouerMovies = this._MoviesapiService.ouerLatestMovies.getValue();
      },
    });
  }
}
