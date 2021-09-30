import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveTableGuard implements Resolve<any> {

  constructor(private authService:AuthService){}
  resolve() {
    return this.authService.getmortgageInfo();
  }
}
