import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { paymentModel } from '../../_model/payment.module';



@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  title = 'Payment Page';
  myForm!: FormGroup;


  submitted = false;
  fieldTextType!: boolean;
  errorMessage: any;



  accountnumber!: string;
  accountholdername!: string;

  sortcode: any[] = ['India', 'US', 'UK'];
  isSelected :boolean= true;
  model: paymentModel = {
    accountnumber: '',
    accountholdername: '',
    sortcode: ''
  };
  customers:any=[];
  error: any;
  constructor(private _authService:AuthService ,
              private router: Router ,
              private formBuilder: FormBuilder,
              private titleService:Title) { }

    ngOnInit(): void {
      this.titleService.setTitle(this.title);
  }

  get f() { return this.myForm.controls; }

  onSubmit() {


      this._authService.paymentDetails(this.model).subscribe(
        response => {
          this.customers = response
          console.log(this.customers)
          this.router.navigate(['/dashboard', 'review']);
        },
        (err) => {
          this.error = err;
        },
        );

  }

}



