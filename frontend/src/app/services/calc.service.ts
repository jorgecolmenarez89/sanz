import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  private myAppUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getHistory(): Observable<any> {
    return this.http.get(`${this.myAppUrl}/history`);
  }

  saveParams(params: any): Observable<any> {
    return this.http.post(`${this.myAppUrl}/calc`, params)
  }

}
