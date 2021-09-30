import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { MyprofileComponent } from './auth/myprofile/myprofile.component';
import { NoPageFoundComponent } from './auth/no-page-found/no-page-found.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CanLoadGuard } from './_guards/can-load.guard';
import { CandeactiveGuard } from './_guards/candeactive.guard';
import { CheckLoginGuard } from './_guards/check-login.guard';
import {AuthGuardService} from './_service/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component:RegisterComponent
  // canDeactivate:[CandeactiveGuard]
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) ,  canLoad: [AuthGuardService]  },
  {path:'myprofile' , component:MyprofileComponent , canActivate:[CheckLoginGuard]},

  { path: 'forgotpassword', component:ForgotPasswordComponent },
  {path:'**' , component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
