import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,UserRegistrationComponent,ForgetPasswordComponent,
    MakeBookingComponent,OfferPageComponent,PaymentComponent,PaymentDoneComponent,
     ListOfMoviesComponent,],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
