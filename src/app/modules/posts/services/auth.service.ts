import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userToken = new BehaviorSubject(this.isAuthorized());

  constructor() {
    if (!this.isAuthorized()) {
      // static token from the postman url
      this.setUserToken();
    }
  }

  setUserToken() {
    this.userToken.next(
      '7383c3144975097502747c29f87e584301a8a4579d5bd9b0093b60f9c9714a28'
    );
  }

  getUserTokenValue() {
    return this.userToken.value;
  }

  getUserTokenStream() {
    return this.userToken;
  }

  //if is authorized retun token otherwize return null
  isAuthorized() {
    return localStorage.getItem('userToken');
  }
}
