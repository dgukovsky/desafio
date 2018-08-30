import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'plan-cuentas', loadChildren: './plan-cuentas/plan-cuentas.module#PlanCuentasModule', canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes  /*,{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
