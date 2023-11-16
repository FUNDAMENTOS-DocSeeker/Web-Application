import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Patient} from "../interfaces/patient";
import {BaseUrlService} from "./base-url.service";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  basePath: string = `${this.baseUrlService.baseUrl}/api/v1/patients`;

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

  //GET ALL
  getAll():Observable<Patient>{
    return this.http.get<Patient>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getById(id: string):Observable<Patient>{
    return this.http.get<Patient>(this.basePath+'/'+id,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  postPatient(newObject: any): Observable<Object>{
    return this.http.post<Patient>(this.basePath, newObject,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getPatientLogIn(dni: string, password: string):Observable<Patient>{
    return this.http.get<Patient>(this.basePath+'/dni/'+dni+'/password/'+password,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
