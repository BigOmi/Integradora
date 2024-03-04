import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimalRecordsPageRoutingModule } from './animal-records-routing.module';
import { AnimalRecordsPage } from './animal-records.page';

// Importa el componente Card
import { CardComponent } from 'src/app/card/card.component'; // Asegúrate de colocar la ruta correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalRecordsPageRoutingModule
  ],
  declarations: [
    AnimalRecordsPage,
    CardComponent 
  ]
})
export class AnimalRecordsPageModule {}
