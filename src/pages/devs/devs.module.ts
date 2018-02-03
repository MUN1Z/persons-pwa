import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevsPage } from './devs';

@NgModule({
  declarations: [
    DevsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevsPage),
  ],
})
export class DevsPageModule {}
