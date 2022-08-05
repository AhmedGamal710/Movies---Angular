import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  constructor(private http: HttpClient) {
    this.saveUserData();
  }
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  sendSignUp(data: object): Observable<any> {
    return this.http.post(`https://route-egypt-api.herokuapp.com/signup`, data);
  }
  sendLogIn(data: object): Observable<any> {
    return this.http.post(`https://route-egypt-api.herokuapp.com/signin`, data);
  }
  saveUserData():void {
    const encodeToken = localStorage.getItem('userTokenMovie');
    if (encodeToken) {
      const decodenToken = jwtDecode(encodeToken);
      this.userData.next(decodenToken);
      console.log(this.userData.getValue());
      
    }
  }
}
