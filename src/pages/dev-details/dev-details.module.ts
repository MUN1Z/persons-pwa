import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevDetailsPage } from './dev-details';

@NgModule({
  declarations: [
    DevDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DevDetailsPage),
  ],
})
export class DevDetailsPageModule {}
