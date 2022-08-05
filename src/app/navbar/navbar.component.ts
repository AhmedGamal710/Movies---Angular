import { Component, OnInit } from '@angular/core';
import { AuthapiService } from './../services/authapi.service';
import { Router } from '@angular/router';
import { MoviesapiService } from './../services/moviesapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _AuthapiService: AuthapiService,
    private _Router: Router,
    private _MoviesapiService: MoviesapiService
  ) {}
  userData!:string ;
  isLogin: boolean = false;
  pageNumberMo!: number ;
  pageNumberTv!: number ;
  pageNumberPer!: number ;
  ngOnInit(): void {
    this._MoviesapiService.shardPageNumberMo.subscribe({
      next: () => {
        this.pageNumberMo = this._MoviesapiService.shardPageNumberMo.getValue();
      },
    });
    this._MoviesapiService.shardPageNumberPer.subscribe({
      next: () => {
        this.pageNumberPer = this._MoviesapiService.shardPageNumberPer.getValue();
      },
    });
    this._MoviesapiService.shardPageNumberTv.subscribe({
      next: () => {
        this.pageNumberTv = this._MoviesapiService.shardPageNumberTv.getValue();
      },
    });
    this._AuthapiService.userData.subscribe({
      next: () => {
        if (this._AuthapiService.userData.getValue()) {
          this.userData = this._AuthapiService.userData.getValue().first_name.slice(0,1)
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }
  logOut(): void {
    this._AuthapiService.userData.next(null);
    localStorage.removeItem('userTokenMovie');
    this._Router.navigate(['/login']);
  }
}
