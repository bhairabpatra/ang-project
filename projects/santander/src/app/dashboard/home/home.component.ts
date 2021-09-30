import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../_service/global.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Products}  from '../../module/products'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$:any= [];
  errorMsg!: string;
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {

    this.getProducts()
  }

  getProducts(){
    this.globalService.products()
    .pipe(
      catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      })
  )
    .subscribe((item:any) =>{
          console.log(item)
          this.books$ = item
    })
  }

}
