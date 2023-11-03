import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../interfaces/doctor";
import {Observable} from "rxjs";
import {DoctorResource} from "../interfaces/doctor-resource";
import {DoctorsService} from "./doctors.service";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  patients: Patient[] = [];
  constructor(private http: HttpClient, private doctorService: DoctorsService) { }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  registerPatient(patient: Patient){
    const url = 'http://localhost:8080/api/v1/patients';
    return this.http.post(url, patient);
  }

  loginPatient(dni: string, password: string) {
    const url = `http://localhost:8080/api/v1/patients/dni/${dni}/password/${password}`;
    return this.http.get<Patient>(url);
  }

  registerDoctor(doctor: DoctorResource){
    const url ='http://localhost:8080/api/v1/doctors';
    return this.http.post(url, doctor);
  }

  updateDoctor(doctor: DoctorResource, id :any){
    const url = `http://localhost:8080/api/v1/doctors/${id}`;
    return this.http.put(url, doctor);
  }

  updatePatient(patient: Patient, id :any){
    const url = `http://localhost:8080/api/v1/patients/${id}`;
    return this.http.put(url, patient);
  }


  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

  async loginDoctor(dni: string, password: string): Promise<DoctorResource | undefined> {
    try {
      const response = await this.doctorService.getDoctorByLoginCredentials(dni, password).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
