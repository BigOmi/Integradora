import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Importa el componente UserProfileComponent

@NgModule({
  declarations: [AppComponent, UserProfileComponent], // Agrega UserProfileComponent a las declaraciones
  imports: [BrowserModule, IonicModule.forRoot({ mode: 'md' }), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig)], // Agrega el módulo AngularFireModule y UserProfileComponent a los imports
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
