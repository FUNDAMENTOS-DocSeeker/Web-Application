import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {News} from "../interfaces/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  basePath: string = 'http://localhost:8080/api/v1/news';

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
  getAll():Observable<News>{
    return this.http.get<News>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

}
