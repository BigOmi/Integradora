import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-records',
  templateUrl: './animal-records.page.html',
  styleUrls: ['./animal-records.page.scss'],
})
export class AnimalRecordsPage {

  constructor(private router: Router) {}

  goToUserProfile() {
    this.router.navigateByUrl('/user-profile');
  }
}
