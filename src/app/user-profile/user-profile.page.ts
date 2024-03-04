import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  // Propiedades para almacenar los datos del usuario
  user: any = {
    name: 'BigOmi',
    email: 'putoelquelolea@example.com',
    // Otras propiedades...
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // Aquí podrías recuperar los datos del usuario de una fuente de datos externa si es necesario
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Reemplaza '/home' con la ruta de tu página de inicio
  }

}
