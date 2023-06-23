import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AuthUser } from '../entity/AuthUser';
import { environment } from 'src/environments/environments';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private loginUrl = 'http://localhost:8090/login';

  login(user: AuthUser): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.post(this.loginUrl, user, {
      withCredentials: true,
      headers: headers,
    });
  }

  logout(): Observable<any> {
    this.cookieService.delete('JSESSIONID')
    return this.http.get(environment.endpointUrl.logout, { withCredentials: true });
  }
}
