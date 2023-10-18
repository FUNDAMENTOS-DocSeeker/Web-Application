import { Injectable } from '@angular/core';
import { Patient } from "../interfaces/patient";
import { HttpClient } from "@angular/common/http";
import { Doctor } from "../interfaces/doctor";
import { DoctorsService } from "./doctors.service";
import { DoctorResource } from "../interfaces/doctor-resource";

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  patients: Patient[] = []

  constructor(private http: HttpClient, private doctorService: DoctorsService) { }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  registerPatient(patient: Patient){
    const url = 'http://localhost:3000/patients';
    return this.http.post(url, patient);
  }

  registerDoctor(doctor: Doctor){
    const url ='http://localhost:3000/doctors';
    return this.http.post(url, doctor);
  }

  updateDoctor(doctor: Doctor, id :any){
    const url = `http://localhost:3000/doctors/${id}`;
    return this.http.put(url, doctor);
  }

  async loginDoctor(dni: string, password: string): Promise<DoctorResource | undefined> {
    try {
      const response = await this.doctorService.getDoctorByLoginCredentials(dni, password).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  updatePatient(patient: Patient, id :any){
    const url = `http://localhost:3000/patients/${id}`;
    return this.http.put(url, patient);
  }

  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

}
