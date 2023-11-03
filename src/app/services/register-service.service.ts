import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  patients: Patient[] = [];
  constructor() { }

  addUser(patient: Patient){
    this.patients.push(patient);
  }

  getUser(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showUser(): Patient[]{
    return this.patients;
  }
}
