import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import {Products} from '../module/products';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  users:any =[];
  title = environment.title;




  // Node/Express API
  REST_API: string = environment.apiURL;

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  errorMsg:any;

  constructor(private http:HttpClient) {


   }

  products(): any {

            return this.http.get(this.REST_API + '/products').pipe(
              catchError(error => {
                  let errorMsg: string;
                  if (error.error instanceof ErrorEvent) {
                      this.errorMsg = `Error: ${error.error.message}`;
                  } else {
                      this.errorMsg = this.getServerErrorMessage(error);
                  }

                  return throwError(this.errorMsg);
              })
          );

  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {

        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
  }



}

