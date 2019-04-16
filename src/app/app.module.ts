import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarvelProvider } from '../providers/marvel/marvel';
import { GlobalVariablesProvider } from '../providers/global-variables/global-variables';
import { HttpClientModule } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Md5,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelProvider,
    GlobalVariablesProvider
  ]
})
export class AppModule {}
