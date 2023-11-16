import {Component} from '@angular/core';
import {Patient} from "../../interfaces/patient";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../services/log-in.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../services/sources.service";
import { Router } from '@angular/router';
import {PatientService} from "../../services/patient.service";



@Component({
  selector: 'app-log-in-card',
  templateUrl: './log-in-card.component.html',
  styleUrls: ['./log-in-card.component.css'],
  providers: [MatSnackBar]
})

export class LogInCardComponent{

  rpassword: string='';
  patients: Array<Patient> = [];
  patient: Patient ={ id: 0 ,name: '', email: '', password:'', dni: '', height:0, weight: 0, bmi:0,birthday: '', cellphone: '', photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png", allergies: []};
  signInForm: FormGroup;
  constructor(private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private snackBar:MatSnackBar, private patientsServices:PatientService, private loginService:LogInService, public builder:FormBuilder, private router: Router) {
    this.patientsServices.getAll().subscribe((data: any): void => {
      this.patients = data;
      this.patient.id = this.patients.length
      console.log("SIZE OF patients: ", this.patients.length);
    });

    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      birthday: ['',[Validators.required]],
      cellphone: ['',[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  get dni(){
    return this.signInForm.controls['dni'];
  }

  get password(){
    return this.signInForm.controls['password'];
  }

  get name(){
    return this.signInForm.controls['name'];
  }

  get email(){
    return this.signInForm.controls['email'];
  }

  get cellphone(){
    return this.signInForm.controls['cellphone'];
  }

  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  register() {


    if ((this.patient.password == this.rpassword) && this.rpassword !='' && this.patient.email!=''
      && this.patient.dni!='' && this.patient.cellphone!='' && this.patient.name!='' && this.patient.birthday!='') {

      this.loginService.registerPatient(this.patient).subscribe();
      this.snackBar.open('Register Successful', '', {duration: 1500})
    } else if (this.patient.password != this.rpassword) {
      this.snackBar.open('Password and Confirmation Password must be the same', '', {duration: 1500})
    } else {
      this.snackBar.open('Register Failed, Complete all the cells', '', {duration: 1500})
    }
    this.patient={ id: 0 ,name: '', email: '', password:'', dni: '', height:0, weight: 0, bmi:0,birthday: '', cellphone: '', photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png", allergies: []};
    this.rpassword='';
  }

  login() {
    //IF USER IS FOUND
    this.loginService.loginPatient(this.patient.dni, this.patient.password).subscribe((response) => {
      console.log(response)
      if (response) {
        this.snackBar.open('Login Successful', '', {duration: 1000})
        this.router.navigate(['/dashboard'])
        localStorage.setItem('currentPatient', JSON.stringify(response));

      } else {
        this.snackBar.open('Login Failed', '', {duration: 1000})
      }

    });

  }
}
