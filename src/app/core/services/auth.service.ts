import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;

  login(): Observable<any> {
    this.isUserLoggedIn = true;
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    return of(this.isUserLoggedIn).pipe();
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }

  constructor() { }
}
