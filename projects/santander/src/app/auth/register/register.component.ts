import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';
import { confirmedValidator } from '../../_utility/confirmedValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  myForm!: FormGroup;
  submitted!: boolean;
  firstname:any;
  public secondData: string = '';
  errorMessage :any;
  infoMessage = '';
  showMsg: boolean = false;
  formHide:boolean=true;
  strength!:number;


public   password: string=''
public barLabel: string = "Password strength:";
public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
public thresholds = [90, 75, 45, 25];
public baseColor = '#FFF';
public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];

strengthChanged(strength: number) {
  this.strength = strength;
}

question = [
    {
      id: 1,
      name: 'Dakota Gaylord PhD'

    },
    {
      id: 2,
      name: 'Maria Legros',

    },
    {
      id: 3,
      name: 'Brandyn Fritsch',

    },
    {
      id: 4,
      name: 'Glenna Ward V',

    },
    {
      id: 5,
      name: 'Jamie Veum',

    }
  ];
  isSelected:boolean=true;
  RegisterComponent: any;
  selectChange(e:any){
    console.log(e.target.value);
  }


  constructor(private _authService:AuthService , private router: Router ,private formBuilder: FormBuilder,private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.myForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      conpassword: ['', [Validators.required, Validators.minLength(5)]],
      question:['', [Validators.maxLength(100)]],
      answer: ['', [Validators.required]]


  },{
    validator:confirmedValidator('password', 'conpassword'),

  });


    if(this._authService.checkLogin()){
      this.router.navigate(['/', 'dashboard']);
    }

    console.log("test" + this.myForm.controls.password)
  }

  get f() { return this.myForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }
        this._authService.getRegister(this.myForm.value).subscribe((result) =>{
          this.showMsg= true;
          this.formHide = false
          // localStorage.setItem('formHide','true')

    }, err => {

      this.errorMessage  = err.error.message;

    });


  }

  cloneError(){
    this.errorMessage = false
  }


}







