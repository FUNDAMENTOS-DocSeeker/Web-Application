import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DoctorResource } from "../interfaces/doctor-resource";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private readonly doctorsUrl: string;

  constructor(private http: HttpClient) {
    this.doctorsUrl = "http://localhost:8082/api/v1/doctors"
  }

  getDoctorByLoginCredentials(dni: string, password: string): Observable<DoctorResource> {
    return this.http.post<DoctorResource>(`${this.doctorsUrl}/login`, { dni, password });
  }

}
