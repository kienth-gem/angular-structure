import {Component, OnInit} from '@angular/core';
import {ROUTES} from "@constants/common";
import {AuthService} from "@core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  routesArray: any = ROUTES
  constructor(
    private authService: AuthService,
    private router : Router
  ) {}
  ngOnInit() {}

  onClickLogOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
