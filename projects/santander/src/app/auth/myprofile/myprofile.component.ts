import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  userName: any=[];
  userID:any;
  constructor(private _authService:AuthService , private router: Router) {}

  ngOnInit(): void {
    this.userID= localStorage.getItem("user_ID")
    this.getCurrentUser(this.userID)
  }


  getCurrentUser(userID:any){

    this._authService.getCurrentUser(userID).subscribe((userProfile) =>{

      this.userName =userProfile
    })

  }

}
