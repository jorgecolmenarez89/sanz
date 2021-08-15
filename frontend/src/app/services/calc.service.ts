import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  private myAppUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHistory(): Observable<any> {
    return this.http.get(`${this.myAppUrl}/history`);
  }

  saveParams(params: any): Observable<any> {
    return this.http.post(`${this.myAppUrl}/calc`, params)
  }

}
