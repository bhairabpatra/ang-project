import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {

  constructor(private router:Router , private authService:AuthService){}

  canLoad(route: Route, segments: UrlSegment[]): boolean  {
    if(this.authService.checkLogin()){
      return true
    }
    else{
      this.router.navigate(['/']);
      return false
    }
  }


}
