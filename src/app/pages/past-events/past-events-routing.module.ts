import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastEventsPage } from './past-events.page';

const routes: Routes = [
  {
    path: '',
    component: PastEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastEventsPageRoutingModule {}
