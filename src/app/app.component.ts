import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { HomePage } from '../pages/home/home';
import { DevsPage } from '../pages/devs/devs';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Developers', component: DevsPage },
      { title: 'About', component: AboutPage }
    ];
    
    let developers = [{
      "id": 1,
      "name": "Elioenai Morais",
      "email": "elimorais.webdesigner@gmail.com",
      "link": "https://github.com/nassaustudent",
      "image": "aa"
      }, {
      "id": 2,
      "name": "Felipe Muniz",
      "email": "felipemuniz.net@gmail.com",
      "link": "https://github.com/Mun1z",
      "image": "bb"
      }, {
      "id": 3,
      "name": "Marcio Ferreira",
      "email": "marcio.fp.m2@gmail.com",
      "link": "https://github.com/marcioferreirap",
      "image": "img/avatar-cher.png"
      }, {
      "id": 4,
      "name": "Thiago Rafael",
      "email": "tr.thiagorafael@gmail.com",
      "link": "https://github.com/trthiagorafael",
      "image": "dd"
    }];

    storage.set('developers', developers);
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}
