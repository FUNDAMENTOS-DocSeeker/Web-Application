import { Component, EventEmitter, Output, Input} from '@angular/core';
import {SaveAppointmentService} from "../../services/save-appointment.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() imageSrc = 'assets/images/checkImage.png';
  @Input() popupText = 'Done';
  closeButtonImg = 'assets/images/closeButton.png';
  popupVisible = false;
  @Output() close = new EventEmitter<void>();

  constructor(private interactionService: SaveAppointmentService, private router: Router) { }

  showPopup() {
    this.popupVisible = true;
  }
  activarAgregarObjeto() {
    this.interactionService.activarAgregarObjeto();
    this.popupVisible = true;

  }
  closePopup() {
    this.popupVisible = false;
    this.router.navigate(['/dashboard']);

  }
}
