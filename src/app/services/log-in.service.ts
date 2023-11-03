import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../interfaces/doctor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  patients: Patient[] = [];
  constructor(private http: HttpClient) { }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  registerPatient(patient: Patient){
    const url = 'http://localhost:8081/api/v1/patients';
    return this.http.post(url, patient);
  }

  loginPatient(dni: string, password: string) {
    const url = `http://localhost:8081/api/v1/patients/dni/${dni}/password/${password}`;
    return this.http.get<Patient>(url);
  }

  registerDoctor(doctor: Doctor){
    const url ='http://localhost:3000/doctors';
    return this.http.post(url, doctor);
  }

  updateDoctor(doctor: Doctor, id :any){
    const url = `http://localhost:3000/doctors/${id}`;
    return this.http.put(url, doctor);
  }

  updatePatient(patient: Patient, id :any){
    const url = `http://localhost:8081/api/v1/patients/${id}`;
    return this.http.put(url, patient);
  }


  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

}
