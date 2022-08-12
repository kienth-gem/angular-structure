import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  // @ts-ignore
  checkLogin(url: string): true | UrlTree {
    let isUserLoggedIn: any = localStorage.getItem('isUserLoggedIn') || null

    if(isUserLoggedIn != null && isUserLoggedIn == "true"){
      if(url == "/login")
        this.router.parseUrl('/dashboard');
      else
        return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
