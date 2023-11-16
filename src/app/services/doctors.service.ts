import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { DoctorResource } from "../interfaces/doctor-resource";
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private readonly doctorsUrl: string;
  httpOptions: {headers: HttpHeaders}={
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  }
  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) {
    this.doctorsUrl = `${this.baseUrlService.baseUrl}/api/v1/doctors`
  }


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
  getDoctorByLoginCredentials(dni: string, password: string): Observable<DoctorResource> {
    return this.http.post<DoctorResource>(`${this.doctorsUrl}/login`, { dni, password });
  }
  getAll():Observable<DoctorResource>{
    return this.http.get<DoctorResource>(this.doctorsUrl,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getById(id: string):Observable<DoctorResource>{
    return this.http.get<DoctorResource>(this.doctorsUrl+'/'+id,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
