import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DevDetailsPage } from '../dev-details/dev-details';


/**
 * Generated class for the DevsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devs',
  templateUrl: 'devs.html',
})
export class DevsPage {

  public developerList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.storage.get('developers').then((val) => {
      this.developerList = val;
    });
  
  }

  goToDetail(dev: any){
    this.navCtrl.push(DevDetailsPage,{
      dev: dev
    });
  }

}
