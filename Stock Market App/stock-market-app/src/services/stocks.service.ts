import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private apiUrl = 'http://localhost:3000/stocks'; // NestJS API URL

  constructor(private http: HttpClient) {}

  // Fetch most active options
  getMostActiveOptions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/most-active-options`);
  }
}
