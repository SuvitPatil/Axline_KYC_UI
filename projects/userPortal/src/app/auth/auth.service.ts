import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public redirectUrl: string;
  public options: any;
  public serverURL = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) {
    this.options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.serverURL}/userLogin`, data, this.options);
  }

  logout(): void {
    debugger;
    this.isLoggedIn = false;
  }
}
