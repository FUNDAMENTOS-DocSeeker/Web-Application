import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import { MedicalHistoryService } from 'src/app/services/medical-history.service';

@Component({
  selector: 'app-new-medical-history',
  templateUrl: './new-medical-history.component.html',
  styleUrls: ['./new-medical-history.component.css']
})
export class NewMedicalHistoryComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  patients: Array<any> = [];
  patient: any;
  medicalHistories: Array<any> = [];
  medicalHistory: any;
  id="" ;
  review: any;
  selectedDate: Date;
  description = "";


  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router, private medicalService: MedicalHistoryService) {
    this.selectedDate = new Date();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.medicalService.getAll().subscribe((data: any): void => {
      this.medicalHistories = data;
      this.medicalHistory = this.medicalHistories.find(medicalHistory => medicalHistory.idPatient == this.id);
      console.log("Medical History: ", this.medicalHistory);

    this.newsSource.getSources('patients').subscribe((data: any): void => {
      this.patients = data;
      this.patient = this.patients.find(patient => patient.id == this.id);
      console.log("Patient: ", this.patient);
    });
    });
  }
  saveHistoricalRecord(){
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth() + 1;
    const day = this.selectedDate.getDate();
    const idDate = `${year}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`;
    if(this.medicalHistory){
      let newHistory = {
        "date": idDate,
        "content": this.description
      }
      this.medicalHistory["historial"].push(newHistory)
      this.medicalService.update(this.medicalHistory.id, this.medicalHistory).subscribe((data: any): void => {
        console.log("Medical HIstory PUT", data)
      })
    }
    else{
      let newHistory = {
        "id": this.medicalHistories.length,
        "idPatient": this.id,
        "historial": [
          {
            "id": 0,
            "date": idDate,
            "content": this.description
          }
        ]
      }
      this.medicalService.create(newHistory).subscribe((data: any): void => {
        console.log("Medical HIstory POST new", data)
      })
    }
  }
}
