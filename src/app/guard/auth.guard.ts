import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthapiService } from './../services/authapi.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _AuthapiService: AuthapiService,
    private _Router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._AuthapiService.userData.getValue()) {
      return true;
    } else {
      this._Router.navigate(['/login']);
      return false;
    }
  }
}
@Injectable({
  providedIn: 'root',
})
export class AuthGuardLogin implements CanActivate {
  constructor(
    private _AuthapiService: AuthapiService,
    private _Router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._AuthapiService.userData.getValue()) {
      this._Router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
}
