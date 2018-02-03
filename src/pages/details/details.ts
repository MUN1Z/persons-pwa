import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public name;
  public surname;
  public gender;
  public region;
  public age;
  public email;
  public photo;
  ;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidEnter() {

    this.name= this.navParams.get("name");
    this.surname= this.navParams.get("surname");
    this.gender= this.navParams.get("gender");
    this.region= this.navParams.get("region");
    this.age= this.navParams.get("age");
    this.email= this.navParams.get("email");
    this.photo= this.navParams.get("photo");
  }
 
}
