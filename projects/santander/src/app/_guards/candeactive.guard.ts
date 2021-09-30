import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../auth/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<RegisterComponent> {


  canDeactivate(component: RegisterComponent){

    if(component){
      // return component.RegisterComponent()
      return window.confirm('You Have Some unsave chnages , are you sure you want to navigate')
    }
    return false

  }

}
