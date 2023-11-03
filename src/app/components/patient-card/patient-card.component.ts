import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {
  @Input() imageSrc = "https://www.freeiconspng.com/uploads/patient-icon-28.png";
  @Input() namePatient = "Patient Name";
}
