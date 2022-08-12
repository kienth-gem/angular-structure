import { Component } from '@angular/core';
import {ROUTES} from "@constants/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routesArray: any = ROUTES
}
