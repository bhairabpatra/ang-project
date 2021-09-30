import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private router:Router , private authService:AuthService){}

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.authService.checkLogin()){
        return true
      }
      else{
        this.router.navigate(['/']);
        return false
      }

  }

}
