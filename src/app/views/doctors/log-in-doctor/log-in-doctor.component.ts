/*import { Component } from '@angular/core';
import {Doctor} from "../../../interfaces/doctor";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../../services/log-in.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in-doctor',
  templateUrl: './log-in-doctor.component.html',
  styleUrls: ['./log-in-doctor.component.css']
})
export class LogInDoctorComponent {
  rpassword: string ='';
  doctor: Doctor={dni:'', password:'', name:'', area:'', description:'', patients:NaN, years:NaN, age:NaN, email:'', cost:NaN,
    photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg", education: [ {name: ''}],
    hoursAvailable:[{id:0, hours: "9:00 AM - 10:00 AM"}, {id:1, hours:"10:30 AM - 12:00 PM"}, {id:2, hours:"15:30 PM - 17:00 PM"}]};
  doctors: Array<any> = [];
  signInForm: FormGroup;

  rpassword: string ='';
  doctor: Doctor = {} as Doctor;
  doctors: Array<any> = [];
  signInForm: FormGroup;
  logInForm = new FormGroup(
    {
      dni: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  )

  constructor(private newsSource: SourcesService, private loginService:LogInService, public builder:FormBuilder, private router: Router) {
    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      area: ['',[Validators.required]],
      age: ['',[Validators.required, Validators.min(24), Validators.max(80)]],
      email: ['',[Validators.required, Validators.email]],
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


  get area(){
    return this.signInForm.controls['area'];
  }

  register(){
    if ((this.doctor.password == this.rpassword) && this.rpassword !='' && this.doctor.email!=''
      && this.doctor.name !='' && this.doctor.dni!='' && this.doctor.age>23 && this.doctor.area!='') {
      this.loginService.registerDoctor(this.doctor).subscribe();

    } else if (this.doctor.password != this.rpassword) {
      console.log("ingrese su contraseña bien")
    }
    this.doctor={dni:'', password:'', name:'', area:'', description:'', patients:0, years:0, age:0, email:'', cost:0,
      photo: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg", education: [ {name: ''} ],
      hoursAvailable:[{id:0, hours: "9:00 AM - 10:00 AM"}, {id:1, hours:"10:30 AM - 12:00 PM"}, {id:2, hours:"15:30 PM - 17:00 PM"}]
    };
    this.rpassword='';
  }

  login(){
    const doctorFound = this.doctors.find(doctor =>doctor.dni== this.doctor.dni && doctor.password == this.doctor.password)
    if(doctorFound){
      console.log(doctorFound)
      localStorage.setItem('currentDoctor', JSON.stringify(doctorFound));
      this.router.navigate(['/dashboardDoctor'])
    }
  }

  ngOnInit() {
    this.newsSource.getSources('doctors').subscribe((data: any): void => {
      this.doctors = data;
      console.log("Sources: ", this.doctors);
    });
  }

}*/
import { Component } from '@angular/core';
import { Doctor } from "../../../interfaces/doctor";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SourcesService } from "../../../services/sources.service";
import { LogInService } from "../../../services/log-in.service";
import { Router } from "@angular/router";
import { DoctorResource } from "../../../interfaces/doctor-resource";
import {DoctorsService} from "../../../services/doctors.service";

@Component({
  selector: 'app-log-in-doctor',
  templateUrl: './log-in-doctor.component.html',
  styleUrls: ['./log-in-doctor.component.css']
})
export class LogInDoctorComponent {
  rpassword: string ='';
  doctor: DoctorResource = {} as DoctorResource;
  doctors: Array<any> = [];
  signInForm: FormGroup;
  logInForm = new FormGroup(
    {
      dni: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  )

  constructor(private newsSource: SourcesService, private loginService:LogInService, public builder:FormBuilder, private router: Router, private doctorService:DoctorsService) {
    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      speciality: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
    })
    this.doctorService.getAll().subscribe((data: any): void => {
      this.doctors = data;
      this.doctor.id = this.doctors.length
      console.log("SIZE OF patients: ", this.doctors.length);
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


  get speciality(){
    return this.signInForm.controls['speciality'];
  }

  register(){
    if ((this.doctor.password == this.rpassword) && this.rpassword !='' && this.doctor.email!=''
      && this.doctor.name !='' && this.doctor.dni!='' && this.doctor.speciality!='') {
      this.loginService.registerDoctor(this.doctor).subscribe();

    } else if (this.doctor.password != this.rpassword) {
      console.log("ingrese su contraseña bien")
    }
    this.doctor={id: 0, dni:'', password:'', name:'', speciality:'', description:'', patientsAssisted:'', experienceYears:'', email:'', doctorFee:'',
      profilePhoto: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg", birthDate: '', phoneNumber: ''
    };
    this.rpassword='';
  }

  ngOnInit() {

  }


  login() {
    let doctorAccount: Promise<DoctorResource | undefined> = this.loginService.loginDoctor(this.doctor.dni ?? '', this.doctor.password ?? '');

    doctorAccount
      .then(response => {
        console.log(response);
        localStorage.setItem('currentDoctor', JSON.stringify(response));
        this.router.navigate(['/dashboardDoctor'])
      })
      .catch(error => {
        console.log(error);
      });
  }
}
