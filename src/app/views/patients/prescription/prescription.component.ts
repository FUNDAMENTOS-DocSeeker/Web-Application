import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import {PrescriptionsService} from "../../../services/prescriptions.service";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  prescriptions: Array<any> = [];
  prescription: any;
  id = "";
  doctor: any;
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private prescriptionService: PrescriptionsService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.prescriptionService.getAll().subscribe((data: any): void =>{
      this.prescriptions = data;
      this.prescription = this.prescriptions.find(prescription => prescription.id == this.id);

      this.prescriptionService.getDoctorById(this.prescription.doctorId).subscribe((doctorData: any) => {
        this.doctor = doctorData;
      });
      console.log("Sources: ", this.prescription);
      console.log("Sources: ", this.id);
    });
  }



}
