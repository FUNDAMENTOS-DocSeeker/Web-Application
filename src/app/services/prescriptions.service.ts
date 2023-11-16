import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Prescriptions} from "../interfaces/prescriptions";
import {Doctor} from "../interfaces/doctor";
import {BaseUrlService} from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {

  basePath: string = `${this.baseUrlService.baseUrl}/api/v1/prescriptions`;

  httpOptions: {headers: HttpHeaders}={
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  }

  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) { }

  // API ERROR HANDLE
  handleError(error: HttpErrorResponse):Observable<never>{
    if(error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`)
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`)
    }
    // Return Observable witch Error Message to client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  //GET ALL Prescription
  getAll():Observable<Prescriptions>{
    return this.http.get<Prescriptions>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getDoctorById(id: any): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.baseUrlService.baseUrl}/api/v1/doctors/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Prescription by id
  getById(id: any): Observable<Prescriptions> {
    return this.http.get<Prescriptions>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
