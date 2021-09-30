import { BrowserModule , Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckLoginGuard } from './_guards/check-login.guard';
import { HowToApplyComponent } from './dashboard/how-to-apply/how-to-apply.component';
import { MortageOptionsComponent } from './dashboard/mortage-options/mortage-options.component';
import { ConfirmMortagageComponent } from './dashboard/confirm-mortagage/confirm-mortagage.component';
import { ValuationComponent } from './dashboard/valuation/valuation.component';
import { OthersComponent } from './dashboard/others/others.component';
import { PaymentDetailsComponent } from './dashboard/payment-details/payment-details.component';
import { ReviewAndSubmitComponent } from './dashboard/review-and-submit/review-and-submit.component';
import { PropertyDeatilsComponent } from './dashboard/property-deatils/property-deatils.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NoPageFoundComponent } from './auth/no-page-found/no-page-found.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderService } from './_service/loader.service';
import { LoaderInterceptor } from './_nterceptor/loader.interceptor';
import { CandeactiveGuard } from './_guards/candeactive.guard';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './_service/auth-guard.service';
import { AlertComponent } from './shared/alert/alert.component';

import { ToastrModule } from 'ngx-toastr';
import { AuthChkInterceptor } from './_nterceptor/auth-chk.interceptor';
import { Ng9PasswordStrengthBarModule } from 'ng9-password-strength-bar';
import { DataTablesModule } from 'angular-datatables';
import { MyprofileComponent } from './auth/myprofile/myprofile.component';
import { ErrorhandelInterceptor } from './_nterceptor/errorhandel.interceptor';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    PropertyDeatilsComponent,
    ForgotPasswordComponent,
    NoPageFoundComponent,
    LoaderComponent,
    AlertComponent,
    MyprofileComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng9PasswordStrengthBarModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    DataTablesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })


  ],
  providers: [ Title, CheckLoginGuard ,AuthGuardService ,CookieService , LoaderService ,CandeactiveGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthChkInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorhandelInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
