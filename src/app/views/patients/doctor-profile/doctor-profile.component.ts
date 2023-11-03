import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {DoctorsService} from "../../../services/doctors.service";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  doctors: Array<any> = [];
  doctor: any;
  id="" ;
  selectedDate: Date;
  selectedHourStart: any;
  selectedHourEnd: any;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private DoctorsService: DoctorsService, private router: Router) {
    this.selectedDate = new Date();
  }

  navigateToAppointment() {
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth() + 1;
    const day = this.selectedDate.getDate();
    const idDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    console.log("START", this.selectedHourStart)
    console.log("end", this.selectedHourEnd)

    this.router.navigate(['/payment', this.id, idDate, this.selectedHourStart, this.selectedHourEnd]);
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.DoctorsService.getById(this.id).subscribe((data: any): void => {
      this.doctor = data;

      console.log("Sources: ", this.doctor);
      console.log("Sources: ", this.id);

    });


  }
}
