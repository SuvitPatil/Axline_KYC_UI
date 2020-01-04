import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  options: any;

  serverURL = 'http://localhost:4000';
  constructor(private http: HttpClient) {
    this.options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.serverURL}/users`, data, this.options);
  }

  verifyUserEmailOTP(data:any): Observable<any> {
    return this.http.post(`${this.serverURL}/verifyPin`, data, this.options);
  }
}
