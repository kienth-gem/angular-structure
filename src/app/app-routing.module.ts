import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "@pages/dashboard/dashboard.component";
import { ProductComponent } from "@pages/product/product.component";
import { LoginComponent } from "@pages/login/login.component";
import { ROUTER_PATH } from "@constants/common";
import {ExpenseGuard} from "./expense.guard";

const routes: Routes = [
  { path: ROUTER_PATH.LOGIN, component: LoginComponent },
  { path: ROUTER_PATH.DASHBOARD, component: DashboardComponent, canActivate: [ExpenseGuard] },
  { path: '', redirectTo: ROUTER_PATH.DASHBOARD, pathMatch: 'full'},
  { path: ROUTER_PATH.PRODUCT, component: ProductComponent, canActivate: [ExpenseGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
