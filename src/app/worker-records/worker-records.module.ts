import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerRecordsPageRoutingModule } from './worker-records-routing.module';

import { WorkerRecordsPage } from './worker-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerRecordsPageRoutingModule
  ],
  declarations: [WorkerRecordsPage]
})
export class WorkerRecordsPageModule {}
