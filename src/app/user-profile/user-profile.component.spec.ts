import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  // Aquí puedes agregar la lógica necesaria para obtener y mostrar los datos del usuario
  user = {
    name: 'Nombre del usuario',
    email: 'usuario@example.com',
  };

  // Lógica para la selección de la foto de perfil
  selected = 'default';
  types = [
    {
      icon: 'fa-meh',
      name: 'default',
    },
    {
      icon: 'fa-gift',
      name: 'party',
    },
    {
      icon: 'fa-pizza-slice',
      name: 'pizza',
    },
    {
      icon: 'fa-user-tie',
      name: 'tie',
    },
    {
      icon: 'fa-eye',
      name: 'glow',
    },
    {
      icon: 'fa-glasses',
      name: 'glasses',
    },
  ];

  changeType(type: string) {
    this.selected = type;
  }
}
