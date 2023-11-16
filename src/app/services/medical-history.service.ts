import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { MedicalHistory } from '../interfaces/medical-history';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {

  basePath = `${this.baseUrlService.baseUrl}/api/v1/medical-histories`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient, private baseUrlService: BaseUrlService) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAll(): Observable<MedicalHistory> {
    return this.http.get<MedicalHistory>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getByPatientId(patientId: number): Observable<MedicalHistory> {
    return this.http.get<MedicalHistory>(`${this.basePath}/patient/${patientId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: number): Observable<MedicalHistory> {
    return this.http.get<MedicalHistory>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<MedicalHistory> {
    return this.http.put<MedicalHistory>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
  create(item: any): Observable<MedicalHistory> {
    return this.http.post<MedicalHistory>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
