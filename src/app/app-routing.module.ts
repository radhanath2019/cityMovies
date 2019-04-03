import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListOfMoviesComponent } from './list-of-movies/list-of-movies.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'user-registration',
    component:UserRegistrationComponent,
  },
  {
    path: 'forget-password',
    component:ForgetPasswordComponent,
  },
  {
    path: 'list-of-movies',
    component:ListOfMoviesComponent,
  },
  {
    path: 'make-booking',
    component:MakeBookingComponent,
  },
  {
    path: 'offer-page',
    component:OfferPageComponent,
  },
  {
    path: 'payment-done',
    component:PaymentDoneComponent,
  },
  {
    path: 'payment',
    component:PaymentComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
