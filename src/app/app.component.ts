import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage } from '../pages/menu/menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = MenuPage;
  config: {
    platforms: {
      ios: {
        backButtonText: 'Voltar',
      },
      android: {
        backButtonText: 'Voltar'
      }
    }
  }

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public menuCTRL: MenuController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
