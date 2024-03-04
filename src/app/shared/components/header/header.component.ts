import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent   {
  constructor(private router: Router, private firebaseSvc: FirebaseService, private utilsSvc: UtilsService) {}

  @Input() title!: string;
  @Input() backButton!: string;

  sigOut() {
    this.firebaseSvc.signOut();
  }

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile');
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToRegistros() {
    this.router.navigateByUrl('/animal-records');
  }

  goToTrabajadores() {
    this.router.navigateByUrl('/worker-records');
  }
}
