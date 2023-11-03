import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, shareReplay, Subscription} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import {SaveAppointmentService} from "../../../services/save-appointment.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  signInForm: FormGroup;
  dates: Array<any> = [];
  doctors: Array<any> = [];
  doctor: any;
  currentPatient: any;
  id="" ;
  popupVisible = false;
  newAppointment: any;
  private agregarObjetoSubscription: Subscription;

  constructor(private interactionService: SaveAppointmentService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver,
              private newsSource: SourcesService, private appointmentSource: AppointmentService, private router: Router, public builder:FormBuilder) {
    this.agregarObjetoSubscription = this.interactionService.addAppointment$.subscribe(() => {
      this.addAppointment();
    });
    this.signInForm = this.builder.group({
      cardholder: ['',[Validators.required, Validators.minLength(8)]],
      cardnumber: ['', [Validators.required, Validators.minLength(8)]],
      expirationdate: ['',[Validators.required]],
      cvv: ['',[Validators.required], Validators.maxLength(3), Validators.minLength(3)],
    })
  }

  get cardholder(){
    return this.signInForm.controls['cardholder'];
  }

  get cardnumber(){
    return this.signInForm.controls['cardnumber'];
  }

  get expirationdate(){
    return this.signInForm.controls['expirationdate'];
  }

  get cvv(){
    return this.signInForm.controls['cvv'];
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

    this.newsSource.getSources('doctors').subscribe((data: any): void => {
      this.doctors = data;
      this.doctor = this.doctors.find(doctor => doctor.id == this.id);

      console.log("Sources: ", this.doctor);
      console.log("Sources: ", this.id);

    });



  }
  addAppointment(){
    this.appointmentSource.getAll().subscribe((data: any): void => {
      this.dates = data;
      console.log("SIZE OF DATES: ", this.dates.length);
    });
    this.newAppointment = {
      "id": this.dates.length,
      "date": this.route.snapshot.params['idDate'],
      "startTime": "12:00",
      "endTime": "15:00",
      "doctorId": parseInt(this.route.snapshot.params['id']),
      "patientId": parseInt(this.currentPatient.id),
    }
    this.appointmentSource.postReview(this.newAppointment).subscribe((data: any): void => {
      console.log("CITA REGISTRADA");

    });
  }
  showPopup() {
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
