import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private logo = new BehaviorSubject('');
  logo$ = this.logo.asObservable();

  private appTitle = new BehaviorSubject('');
  appTitle$ = this.appTitle.asObservable();

  constructor(private http: HttpClient) {}

  readonly url = environment.endpointUrl;

}
