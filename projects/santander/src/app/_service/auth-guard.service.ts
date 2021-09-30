import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanLoad ,CanActivateChild{

  constructor(private authService:AuthService ,private router: Router) { }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authService.checkLogin()){
      return true
    }
    else{
      this.router.navigate(['/']);
      return false
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean{

    const url = route.path;
    console.log("URL"+ url)
    if(this.authService.checkLogin()){
      return true
    }
    else{

      this.router.navigate(['/']);
      return false
    }
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

        if(this.authService.checkLogin()){
          return false
        }
        else{
          this.router.navigate(['/']);
          return false
        }
  }
}
