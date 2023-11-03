import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.css']
})
export class ProfileButtonComponent {
  label: string= 'Doctor';
  imageUrl: string = 'assets/menu-doctor.png';
}
