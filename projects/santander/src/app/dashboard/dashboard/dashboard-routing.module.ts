import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildGuard } from '../../_guards/child.guard';
import { AboutComponent } from '../about/about.component';
import { ConfirmMortagageComponent } from '../confirm-mortagage/confirm-mortagage.component';
import { HomeComponent } from '../home/home.component';
import { HowToApplyComponent } from '../how-to-apply/how-to-apply.component';
import { MortageOptionsComponent } from '../mortage-options/mortage-options.component';
import { NewsComponent } from '../news/news.component';
import { OthersComponent } from '../others/others.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { PropertyDeatilsComponent } from '../property-deatils/property-deatils.component';
import { ReviewAndSubmitComponent } from '../review-and-submit/review-and-submit.component';
import { ValuationComponent } from '../valuation/valuation.component';
import { DashboardComponent } from './dashboard.component';
import {AuthGuardService} from '../../_service/auth-guard.service';
import { ResolveTableGuard } from '../../_guards/resolve-table.guard';

const routes: Routes = [

  { path: '', component: DashboardComponent,

  canActivateChild: [ AuthGuardService ],

      children: [
          { path: '', component:HowToApplyComponent },
          { path: 'HowToApply', component:HowToApplyComponent },
          { path: 'MortageOptions', component:MortageOptionsComponent , resolve:{data:ResolveTableGuard}},
          { path: 'ConfirmMortagage', component:ConfirmMortagageComponent },
          { path: 'properties', component:PropertyDeatilsComponent },
          { path: 'Valuation', component:ValuationComponent },
          { path: 'Others', component:OthersComponent },
          { path: 'PaymentDetails', component:PaymentDetailsComponent },
          { path: 'review', component:ReviewAndSubmitComponent },
      ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
