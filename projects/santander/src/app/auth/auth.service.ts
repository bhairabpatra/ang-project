import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { first, map } from 'rxjs/operators';
import { User } from '../_model/user.model';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cookieService: any;
  cookieValue:any;
  isOnline:any;
  apiUrl='http://localhost:3000/users';
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http:HttpClient , private cService:CookieService) {

    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser.email'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  isUserLoggerdIn$ = new Subject<any>();
  private loggedIn = new BehaviorSubject<boolean> (false)

    get isLoggedIn(){
          return this.loggedIn.asObservable()
    }


  public get currentUserValue(): User {
    return this.currentUserSubject.value
}



getlogin(data:any) {
    return this.http.post<any>('http://localhost:4500/api/signin', data)
        .pipe(map(user => {
                  console.log(user)
                  localStorage.setItem('currentUser', JSON.stringify(user.email));
                  this.currentUserSubject.next(user.email);
                  this.loggedIn.next(true);
                  return user

        }));
}
 error(message: any) {
  return throwError({ error: { message } });
}


checkLogin(){
     if(localStorage.getItem("token")){
      this.loggedIn.next(true);
          return true
     }
     else{
       return false
     }
  }


  getRegister(data:any){
        return this.http.post('http://localhost:4500/api/register' ,data)
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.removeItem("token")
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
  }

  public getToken(): any {
    return localStorage.getItem('token');

  }

  isUserLoggerd$ = new Subject<any>();

  getCurrentUser(id:any){
    return this.http.get('http://localhost:4500/api/user-profile/' + id)
  }

  setPassword(email:any){
    return this.http.post('http://localhost:4500/api/resetpassword' , email)
  }

  getmortgageInfo(){
    return this.http.get('http://localhost:4500/api/')
  }

  paymentDetails(data:any){
    return this.http.post('http://localhost:4500/api/payment' , data)
  }
}


