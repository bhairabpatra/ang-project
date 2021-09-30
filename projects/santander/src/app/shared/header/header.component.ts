import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../_model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogedin:boolean =true;
  isLoggedIn$!: Observable<boolean>;
  userInfo$!:Observable<User>;
  isLog!:boolean;
  cusers!:{};
  userName:any;
  userID:any;
  isUserLoggerd$ = new Subject<any>();
  constructor(private _authService:AuthService , private router: Router, public translate: TranslateService) {

      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');



  }

  ngOnInit(): void {



    this.userID= localStorage.getItem("user_ID")

    if(this._authService.checkLogin()){
      this.isLogedin = false;

    }
    this._authService.isLoggedIn.subscribe( (res) =>{
      this.isLog = res
      console.log("this.isLog" + this.isLog)
     })
      this.isLoggedIn$ = this._authService.isLoggedIn;
      this.getUser()
      this.getCurrentUser(this.userID)
  }

  getUser(){
    this._authService.currentUserSubject.subscribe((res) =>{
      this.cusers=res
       })
  }

  logout(){

    this._authService.logout()
    this.router.navigate(['/']);
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    localStorage.removeItem("user_ID")
  }

  getCurrentUser(userID:any){

    this._authService.getCurrentUser(userID).subscribe((userProfile) =>{

      this.userName =userProfile
    })

  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
