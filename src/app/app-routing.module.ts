import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProductComponent } from "./pages/product/product.component";
import { ROUTER_PATH } from "./constants/common.component";

const routes: Routes = [
  { path: ROUTER_PATH.DASHBOARD, component: DashboardComponent },
  { path: '', redirectTo: ROUTER_PATH.DASHBOARD, pathMatch: 'full' },
  { path: ROUTER_PATH.PRODUCT, component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
