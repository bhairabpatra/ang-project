import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  title = 'Forget password';
  forgotPWD!: FormGroup;
  errorMessage:any;
  submitted: boolean =false;

  constructor(private _authService:AuthService , private router: Router , private titleService:Title,private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.titleService.setTitle(this.title);
    this.forgotPWD = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

  });

    if(this._authService.checkLogin()){
      this.router.navigate(['/', 'dashboard']);
    }
  }
  get f() { return this.forgotPWD.controls; }
  onSubmit(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotPWD.invalid) {
        return;
    }
    this._authService.setPassword(this.forgotPWD.value).subscribe((res)=>{

          console.log(res)

    },err => {

      this.errorMessage  = err.error.message;

    })

  }


}
function email(email: any, any: any) {
  throw new Error('Function not implemented.');
}

