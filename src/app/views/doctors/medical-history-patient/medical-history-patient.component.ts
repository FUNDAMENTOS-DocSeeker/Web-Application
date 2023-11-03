import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../../services/log-in.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { MedicalHistoryService } from 'src/app/services/medical-history.service';
import {MedicalHistory} from "../../../interfaces/medical-history";
@Component({
  selector: 'app-medical-history-patient',
  templateUrl: './medical-history-patient.component.html',
  styleUrls: ['./medical-history-patient.component.css']
})
export class MedicalHistoryPatientComponent {
//CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  currentDoctor: any;
  currentPatient: any;
  medicalHistory: Array<MedicalHistory> = [];
  id=0;


  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService,private medicalService: MedicalHistoryService, private router: Router) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.params['idPatient'];

    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
    }

    this.newsSource.getSources('patients').subscribe((data: any): void => {
      this.currentPatient = data.find((x: any) => x.id == this.id);
      console.log("PATIENT: ", this.currentPatient);
    })

    this.medicalService.getByPatientId(this.id).subscribe((data: any) =>{
      this.medicalHistory = data;
      console.log("Medical History:", this.medicalHistory);
      console.log("description: ", this.medicalHistory[0].description)
      }
    )

  }
}
