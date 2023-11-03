import { Component } from '@angular/core';
@Component({
  selector: 'app-dash-button',
  templateUrl: './dash-button.component.html',
  styleUrls: ['./dash-button.component.css']
})
export class DashButtonComponent {
  label1: string = "Prescriptions";
  label2: string = "Check all your medications";
  img1Src: string = "assets/pill.png";
  img2Src: string = "assets/icone-fleche-droite-noir.png";
}
