import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Review} from "../interfaces/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  basePath: string = 'http://localhost:8105/api/';

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

  //GET ALL
  getAll():Observable<Review>{
    return this.http.get<Review>(this.basePath+"review",this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getByDoctorId(doctorId: number):Observable<Review>{
    return this.http.get<Review>(this.basePath+"doctor/" + doctorId + "/reviews",this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postReview(newObject: any): Observable<Object>{
    return this.http.post<Review>(this.basePath+"review", newObject,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
