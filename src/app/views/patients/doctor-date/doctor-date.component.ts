import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../../../services/doctors.service';


@Component({
  selector: 'app-doctor-date',
  templateUrl: './doctor-date.component.html',
  styleUrls: ['./doctor-date.component.css']
})
export class DoctorDateComponent implements OnInit{
//CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  id= "" ;
  datesAndHoursAvailable: Array<any> = [];
  datesBooked: Array<any> = [];
  allDates: Array<any> = [];
  dateAppointment = "";
  doctors: Array<any> = [];
  doctor: any;
  currentPatient: any;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router, private DoctorsService: DoctorsService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dateAppointment = this.route.snapshot.params['idDate'];
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

    this.DoctorsService.getAll().subscribe((data: any): void => {
      this.doctors = data;
      this.doctor = this.doctors.find(doctor => doctor.id == this.id);

      console.log("Sources: ", this.doctor);

    });
    this.newsSource.getSources('dates').subscribe((data: any): void => {
      this.allDates = data;

      // SAVING THE HOURS THAT ARE ALREADY BOOKED TO THEN EXCLUDE THEM IN THE FINAL ARRAY
      this.doctor.hoursAvailable.forEach((hour: any) => {
        this.allDates.forEach((date: any) => {
          if (!((date.doctorId == this.doctor.id) && (date.date == this.dateAppointment) && (date.hourId == hour.id))) {
            return
          }
            this.datesBooked.push(hour)
        })

      })
      this.datesAndHoursAvailable = this.doctor.hoursAvailable.filter((date: any) =>
        !this.datesBooked.some(excludeDate =>
          excludeDate.id === date.id &&
          excludeDate.hours === date.hours
        )
      );

    });

    console.log(this.datesAndHoursAvailable, "FECHAS DISPONIBLES")
  }
}
