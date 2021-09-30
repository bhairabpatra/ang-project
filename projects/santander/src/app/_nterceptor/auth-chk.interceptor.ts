import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthChkInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {
    console.log("auth tokem" +auth.getToken())
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request)
  }
}
