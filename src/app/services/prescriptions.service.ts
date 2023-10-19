import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Prescriptions} from "../interfaces/prescriptions";
import {Doctor} from "../interfaces/doctor";

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {

  basePath: string = 'http://localhost:8080/api/v1/prescription';

  httpOptions: {headers: HttpHeaders}={
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  }

  constructor(private http: HttpClient) { }

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
    return this.http.get<Doctor>(`http://localhost:3000/doctors/${id}`, this.httpOptions)
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
