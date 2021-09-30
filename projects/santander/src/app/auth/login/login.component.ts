import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  myForm!: FormGroup;
  logednChk!:Observable<boolean> ;
  submitted = false;
  fieldTextType!: boolean;
  errorMessage: any;



toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

  constructor(private _authService:AuthService , private router: Router ,private formBuilder: FormBuilder ,private titleService:Title , private toastr: ToastrService) { }


  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    if(this._authService.checkLogin()){
      this.router.navigate(['/', 'dashboard']);
    }
  }

  get f() { return this.myForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }

       this._authService.getlogin(this.myForm.value).subscribe((res) =>{

            localStorage.setItem('user_ID',res.id)
            localStorage.setItem('token',res.token)
            console.log(res)
            this.router.navigate(['/', 'dashboard']);

        },(err) => {

          this.errorMessage  = err.error.message;
          // this.toastr.error(this.errorMessage);

      })
   }

   cloneError(){
     this.errorMessage = false
   }

}
