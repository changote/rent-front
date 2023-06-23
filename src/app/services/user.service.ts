import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../entity/User';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  readonly url = environment.endpointUrl;

  public userPhoto = new BehaviorSubject('');
  userPhoto$ = this.userPhoto.asObservable();

  getMyaccount(): Observable<any> {
    return this.http.get(this.url.myAccount, { withCredentials: true });
  }

  putNotifications(notifications: any): Observable<any> {
    return this.http.post(this.url.notifications, notifications, {
      withCredentials: true,
    });
  }

  resetPassword(email: any): Observable<any> {
    return this.http.post(this.url.resetPassword, email);
  }

  newPassword(resetParams: any): Observable<any> {
    return this.http.post(this.url.newPassword, resetParams);
  }
}
