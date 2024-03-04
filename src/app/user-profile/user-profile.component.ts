import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  user: { name: string, email: string }; // Define la estructura de tu objeto de usuario

  selected: string = 'default';
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

  constructor() {
    // Simula datos de usuario para propósitos de ejemplo
    this.user = {
      name: 'Usuario Ejemplo',
      email: 'usuario@example.com',
    };
  }
}
