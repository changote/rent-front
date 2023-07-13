import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private ipLocal = '10.62.253.3';
  private cityUrl = 'http://'+this.ipLocal+ ':8090/propertysforhome'; // URL de la API
  private idUrl = 'http://'+this.ipLocal+ ':8090/citybypropertyid';
  private propertyUrl = 'http://'+this.ipLocal+ ':8090/propertybyid';

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
