import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NewsComponent } from '../news/news.component';
import { ConfirmMortagageComponent } from '../confirm-mortagage/confirm-mortagage.component';
import { HowToApplyComponent } from '../how-to-apply/how-to-apply.component';
import { MortageOptionsComponent } from '../mortage-options/mortage-options.component';
import { OthersComponent } from '../others/others.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { ReviewAndSubmitComponent } from '../review-and-submit/review-and-submit.component';
import { ValuationComponent } from '../valuation/valuation.component';
import { FormsModule } from '@angular/forms'; //note this

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    HowToApplyComponent,
    MortageOptionsComponent,
    ConfirmMortagageComponent,
    ValuationComponent,
    OthersComponent,
    PaymentDetailsComponent,
    ReviewAndSubmitComponent,
  ]
  ,
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {

  constructor(){
    console.log("hai")
  }
}
