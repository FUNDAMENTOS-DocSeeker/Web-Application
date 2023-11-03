import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../../../services/sources.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../interfaces/patient';
import {PatientService} from "../../../services/patient.service";

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  idPatient =""
  medicalInformation: any;
  currentPatient: any;
  patient: any;

  constructor(
    private patientsServices: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }
    this.patientsServices.getById(this.idPatient).subscribe((data: any): void => {
      this.medicalInformation = data;

    });

  }
/*
  getMedicalHistoryByPatientId(): any[] {
    return this.medicalInformation
      .filter(history => history.idPatient === this.patientId)
      .map(history => {
        const patient = this.patients.find(p => p.id === history.idPatient);
        return { ...history, patientName: patient ? patient.name : '' };
      });
  }
  getPatientPhotoById(id: number): string {
    const patient = this.patients.find(p => p.id === id);
    return patient ? patient.photo : '';
  }*/
}
