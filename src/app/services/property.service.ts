import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private cityUrl = 'http://localhost:8090/propertysforhome'; // URL de la API
  private idUrl = 'http://localhost:8090/citybypropertyid';
  private propertyUrl = 'http://localhost:8090/propertybyid';

  constructor(private http: HttpClient) { }

  getDatos(city: string): Observable<any> {
    const url = `${this.cityUrl}?city=${city}`; // URL para la solicitud GET con el parámetro ciudad
    return this.http.get<any>(url);
  }

  getCity(id: number){
    const url = `${this.idUrl}?propertyId=${id}`;
    return this.http.get<any>(url).pipe(
      map(response => response.toString())
    );
  }

  getPropertyDatos(propertyid: number): Observable<any> {
    const url = `${this.propertyUrl}?propertyid=${propertyid}`; // URL para la solicitud GET con el parámetro ciudad
    return this.http.get<any>(url);
  }
}
