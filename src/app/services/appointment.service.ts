import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Appointment} from "../interfaces/appointment";
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  basePath: string = `${this.baseUrlService.baseUrl}/api/v1/appointments`;

  httpOptions: {headers: HttpHeaders}={
    headers: new HttpHeaders({
      'content-type':'application/json',
    })
  }

  constructor(private http: HttpClient,private baseUrlService: BaseUrlService) { }

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
  getAll():Observable<Appointment>{
    return this.http.get<Appointment>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getById(id: number):Observable<Appointment>{
    return this.http.get<Appointment>(this.basePath+'/doctor/'+id,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  postReview(newObject: any): Observable<Object>{
    return this.http.post<Appointment>(this.basePath, newObject,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
