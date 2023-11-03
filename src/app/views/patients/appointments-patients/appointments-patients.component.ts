import {Component, OnInit} from '@angular/core';
import { SourcesService } from '../../../services/sources.service';
import { ActivatedRoute } from '@angular/router';
import {PatientService} from "../../../services/patient.service";
@Component({
  selector: 'app-appointments-patients',
  templateUrl: './appointments-patients.component.html',
  styleUrls: ['./appointments-patients.component.css']
})
export class AppointmentsPatientsComponent  implements OnInit {
  idPatient =""
  medicalInformation: any;
  patient: any = {};

  constructor(
    private patientsServices: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.patientsServices.getById(this.idPatient).subscribe((data: any): void => {
      this.patient = data
      this.medicalInformation = data;

    });
  }
}
