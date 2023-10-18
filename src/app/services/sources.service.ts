import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  apikey: string = '';

  constructor(private http: HttpClient) { }


  // @ts-ignore
  getSources(endpoint: string): Observable<Object>{
    return this.http.get(`http://localhost:3000/${endpoint}`)
  }
  getByIdSources(endpoint: string, id: any): Observable<Object>{
    return this.http.get(`http://localhost:3000/${endpoint}/${id}`)
  }
  postSources(endpoint: string, newObject: any): Observable<Object>{
    return this.http.post(`http://localhost:3000/${endpoint}`, newObject)
  }
  updateSources(endpoint: string, id: any, newObject: any): Observable<Object>{
    return this.http.put(`http://localhost:3000/${endpoint}/${id}`, newObject)
  }
}
