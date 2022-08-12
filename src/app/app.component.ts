import {Component, OnInit, SimpleChanges} from '@angular/core';
import { AuthService } from '@core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-structure';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let isUserLoggedInStoreData = localStorage.getItem("isUserLoggedIn");
    this.isUserLoggedIn = isUserLoggedInStoreData !== null && isUserLoggedInStoreData === "true";
  }

  ngDoCheck() {
    let isUserLoggedInStoreData = localStorage.getItem("isUserLoggedIn");
    if (isUserLoggedInStoreData !== String(this.isUserLoggedIn)) {
      this.isUserLoggedIn = isUserLoggedInStoreData !== null && isUserLoggedInStoreData === "true";
    }
  }
}
