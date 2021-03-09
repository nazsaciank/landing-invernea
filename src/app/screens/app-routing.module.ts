import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { AdminScreen } from './admin/admin.component';
import { HomeScreen } from './home/home.component';
import { LoginScreen } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeScreen, },
  { path: 'login', component: LoginScreen },
  { path: 'admin', component: AdminScreen, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
