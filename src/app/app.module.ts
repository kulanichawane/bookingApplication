import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HotelsPage} from '../pages/hotels/hotels'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ViewPage} from '../pages/view/view'
import {BookPage} from '../pages/book/book'
import { SignupPage } from '../pages/signup/signup';
import {AccountPage} from '../pages/account/account'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HotelsPage,ViewPage,BookPage,SignupPage,AccountPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HotelsPage,ViewPage,BookPage,SignupPage,AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
