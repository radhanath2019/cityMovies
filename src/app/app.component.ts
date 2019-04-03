import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'login',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'User Registration',
      url: '/user-registration',
      icon: 'home'
    },
    {
      title: 'Forget Password',
      url: '/forget-password',
      icon: 'home'
    },
    
    {
      title: 'list of movies',
      url: '/list-of-movies',
      icon: 'home'
    },
    {
      title: 'Make Booking',
      url: '/make-booking',
      icon: 'home'
    },
    {
      title: 'Offer Page',
      url: '/offer-page',
      icon: 'home'
    },
    {
      title: 'Payment',
      url: '/payment',
      icon: 'home'
    },
    {
      title: 'Payment Done',
      url: '/payment-done',
      icon: 'home'
    },
    
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
