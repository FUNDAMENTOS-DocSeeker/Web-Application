import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent {
  @Input() imageSrc = "https://static.vecteezy.com/system/resources/previews/006/037/586/original/doctor-linear-icon-medical-worker-practitioner-scientist-thin-line-illustration-contour-symbol-isolated-outline-drawing-vector.jpg";
  @Input() nameDoctor = "Doctor Name";
  @Input() area = "Area of Doctor";
  @Input() price = "Price of each appointment";
}

