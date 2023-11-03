import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-patient-date-card',
  templateUrl: './patient-date-card.component.html',
  styleUrls: ['./patient-date-card.component.css']
})
export class PatientDateCardComponent {
  @Input() imageSrc = "https://www.freeiconspng.com/uploads/patient-icon-28.png";
  @Input() namePatient = "Patient Name";
  @Input() date = "Date";
  @Input() hourStart = "Hour";
  @Input() hourEnd = "Hour";

}
