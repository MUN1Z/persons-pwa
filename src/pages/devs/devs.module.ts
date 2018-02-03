import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevsPage } from './devs';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    DevsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevsPage),
  ],
})
export class DevsPageModule {}
