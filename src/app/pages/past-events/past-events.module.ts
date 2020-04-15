import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastEventsPageRoutingModule } from './past-events-routing.module';

import { PastEventsPage } from './past-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastEventsPageRoutingModule
  ],
  declarations: [PastEventsPage]
})
export class PastEventsPageModule {}
