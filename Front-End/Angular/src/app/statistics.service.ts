
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private apiUrl = '...'; //mon url j'ai doit le compléter

  constructor(private http: HttpClient) {}

  getMonthlyStatistics(): Observable<any> {
    
    return this.http.get<any>(`${this.apiUrl}/monthly-statistics`);
  }
}
