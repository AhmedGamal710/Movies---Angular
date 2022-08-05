import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesapiService } from './../services/moviesapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _MoviesapiService: MoviesapiService,
    private active: ActivatedRoute
  ) {}
  curentId!: string | null;
  curentType!: string | null;
  imgSrc!: string;
  details: any = {};
  ngOnInit(): void {
    this.curentId = this.active.snapshot.paramMap.get('id');
    this.curentType = this.active.snapshot.paramMap.get('type');
    this.imgSrc = this._MoviesapiService.imgPrefix;
    this.getDetails();
  }
  getDetails(): void {
    this._MoviesapiService
      .getDetailsId(this.curentId, this.curentType)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.details = response;
        },
      });
  }
}
