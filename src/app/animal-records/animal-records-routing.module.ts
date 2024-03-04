import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalRecordsPage } from './animal-records.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRecordsPageRoutingModule {}
