import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../../services/log-in.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-medical-history-list',
  templateUrl: './medical-history-list.component.html',
  styleUrls: ['./medical-history-list.component.css']
})
export class MedicalHistoryListComponent {
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  currentDoctor: any;
  dates: Array<any> = [];
  patientsAll: Array<any> = [];
  patients: Array<any> = [];


  constructor(private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private patientsServices: PatientService, private appointmentSource: AppointmentService, private router: Router) {

  }
  ngOnInit() {
    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
      console.log("CURRENT DOCTOR", this.currentDoctor)
    }
    this.appointmentSource.getById(Number(this.currentDoctor.id)).subscribe((data: any): void => {
      this.dates = data;
      console.log("Sources dates: ", this.dates);
      this.patientsServices.getAll().subscribe((data: any): void => {
        this.patientsAll = data;
        const filteredPatientIds = Array.from(new Set(this.dates.map(date => date.patientId)));
        console.log("FILTERED PATIENTS ID", filteredPatientIds)
        // Filtrar los pacientes que tengan idPatient en filteredPatientIds
        this.patients = this.patientsAll.filter(patient => filteredPatientIds.includes(patient.id));
        console.log("PACIENTEEEE: ", this.patients);
      });
    });




  }
}
