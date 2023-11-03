import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../../services/log-in.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../../services/patient.service";
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  currentDoctor: any;
  dates: Array<any> = [];
  patients: Array<any> = [];


  constructor(private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private patientsServices: PatientService,private router: Router) {

  }
  ngOnInit() {
    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
    }
    this.newsSource.getSources('dates').subscribe((data: any): void => {
      this.dates = data.filter((date: any) => date.doctorId == this.currentDoctor.id);
      console.log("Sources dates: ", this.dates);
    });
    this.patientsServices.getAll().subscribe((data: any): void => {
      this.patients = data;

    });
  }

  getNamePatient(idPatient: any): string {
    const patient = this.patients.find(x => x.id == idPatient);
    return patient ? patient.name : '';
  }
  getHourDate(idHour: any): string {
    const hour = this.currentDoctor.hoursAvailable.find((hour: any) => hour.id == idHour);
    return hour ? hour.hours : '';
  }
}
