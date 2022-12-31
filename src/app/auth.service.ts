import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') != null) {
      this.saveUserData();
    }
  }
  userData: any = new BehaviorSubject(null);

  saveUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('token'))
    let deCodeToken:any = jwt_decode(encodeToken);
    this.userData.next(deCodeToken);
    console.log(deCodeToken);

  }

  signUp(userData:object):Observable<any> {
  return this._HttpClient.post('https://api.storerestapi.com/auth/register',userData)
}

  signIn(userData:object):Observable<any> {
  return this._HttpClient.post('https://dummyjson.com/auth/login',userData)
}
  signout() {
    localStorage.removeItem('token');
    console.log(this.userData);
    this.userData.next(null);
    // this._Router.navigate(['/login']);
    console.log("heyyye");
    console.log(this.userData);


  }



}
