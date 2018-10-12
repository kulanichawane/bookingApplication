import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HotelsPage} from '../pages/hotels/hotels';
import { HomePage } from '../pages/home/home';
import {ViewPage} from '../pages/view/view'
import { SignupPage } from '../pages/signup/signup';
import {AccountPage} from '../pages/account/account'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignupPage  ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

