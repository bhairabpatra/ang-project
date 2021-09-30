import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {

  constructor(private router:Router , private authService:AuthService){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {


    if(this.authService.checkLogin()){
      return true
    }
    else{
      this.router.navigate(['/']);
      return false
    }
  }


}
