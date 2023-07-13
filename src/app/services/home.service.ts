import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private ipLocal = '10.62.253.3';
  private apiUrl = 'http://'+this.ipLocal+ ':8090/citysbyname'; // URL de la API

  constructor(private http: HttpClient) { }

  getDatos(city: string): Observable<any> {
    const url = `${this.apiUrl}?city=${city}`; // URL para la solicitud GET con el parámetro ciudad
    console.log(city);
    return this.http.get<any>(url);
  }
}
