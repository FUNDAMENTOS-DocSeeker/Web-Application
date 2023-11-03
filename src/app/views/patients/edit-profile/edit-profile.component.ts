import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LogInService} from "../../../services/log-in.service";
import {Patient} from "../../../interfaces/patient";
import {SourcesService} from "../../../services/sources.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [MatSnackBar]
})
export class EditProfileComponent implements OnInit {

  patients: Array<any> = [];
  currentPatient: any;
  signInForm: FormGroup;
  patient: Patient = {
    dni: '',
    name: '',
    gender: '',
    birthday: '',
    email: '',
    cellphone: '',
    password: '',
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"
  };

  constructor(private loginService: LogInService, public builder: FormBuilder, public newsSource: SourcesService, private snackBar:MatSnackBar) {
    this.signInForm = this.builder.group({
      dni: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {
    this.newsSource.getSources('patients').subscribe((data: any): void => {
      this.patients = data;
      console.log("Sources: ", this.patients);
    });

    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }
    console.log("User logged: ", this.currentPatient);


  }

  get birthday() {
    return this.signInForm.controls['birthday'];
  }
  get name() {
    return this.signInForm.controls['name'];
  }

  get email() {
    return this.signInForm.controls['email'];
  }

  get cellphone() {
    return this.signInForm.controls['cellphone'];
  }

  update() {
    if (this.currentPatient.email != '' && this.currentPatient.cellphone != '' && this.currentPatient.name != '' && this.currentPatient.birthday != '') {
      this.loginService.updatePatient(this.currentPatient, this.currentPatient.id).subscribe((response) => {
        localStorage.setItem('currentPatient', JSON.stringify(this.currentPatient));
        this.snackBar.open('Patient edited successfully', '', {duration: 1500})
      });
    }
    }
}
