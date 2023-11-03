import { Component } from '@angular/core';
import {Doctor} from "../../../interfaces/doctor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LogInService} from "../../../services/log-in.service";
import {SourcesService} from "../../../services/sources.service";
import { DoctorsService } from '../../../services/doctors.service';
import { DoctorResource } from 'src/app/interfaces/doctor-resource';

@Component({
  selector: 'app-edit-profile-doctor',
  templateUrl: './edit-profile-doctor.component.html',
  styleUrls: ['./edit-profile-doctor.component.css']
})
export class EditProfileDoctorComponent {
  doctor: DoctorResource={id:0,name:'', email:'', password:'', dni:'', birthDate:'' , phoneNumber:'', speciality:'', description:'', experienceYears:'', patientsAssisted:'', doctorFee:'',
    profilePhoto: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg"};
  doctors: Array<any> = [];
  signInForm: FormGroup;
  currentDoctor: any;
  ngOnInit(){

    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
    }
    console.log("User logged: ", this.currentDoctor);
  }
  constructor(private loginService: LogInService, public builder: FormBuilder, private doctorService: DoctorsService) {
    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['',[Validators.required]],
      speciality: ['',[Validators.required]],
      birthDate: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      doctorFee: ['', [Validators.required]],
      experienceYears: ['', [Validators.required]],
      description: ['', [Validators.required]],
      phoneNumber:['', Validators.required]
    })
  }

  get doctorFee(){
    return this.signInForm.controls['doctorFee']
  }

  get experienceYears(){
    return this.signInForm.controls['experienceYears']
  }

  get phoneNumber(){
    return this.signInForm.controls['phoneNumber']
  }

  get description(){
    return this.signInForm.controls['description']
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

  update() {

    if (this.currentDoctor.speciality != '' && this.currentDoctor.name != '' && this.currentDoctor.experienceYears != ''
      && this.currentDoctor.doctorFee != '' && this.currentDoctor.description != '') {
      this.loginService.updateDoctor(this.currentDoctor, this.currentDoctor.id).subscribe();
    }
    this.doctorService.getById(this.currentDoctor.id).subscribe((data: any): void => {
      const doctorFound = data;
      console.log("Sources: ", this.doctors);
      localStorage.setItem('currentDoctor', JSON.stringify(doctorFound));
    });

    this.currentDoctor = {
      id: this.currentDoctor.id,
      dni: this.currentDoctor.dni,
      password: this.currentDoctor.password,
      name: this.currentDoctor.name,
      speciality: this.currentDoctor.speciality,
      description: this.currentDoctor.description,
      patientsAssisted: this.currentDoctor.patientsAssisted,
      experienceYears: this.currentDoctor.experienceYears,
      birthDate: this.currentDoctor.birthDate,
      email: this.currentDoctor.email,
      doctorFee: this.currentDoctor.doctorFee,
      profilePhoto: "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
    };

  }

}
