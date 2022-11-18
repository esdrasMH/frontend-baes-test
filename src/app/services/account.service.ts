import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private URL = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  getAccount() {
    return this.http.get<any>(`${this.URL}/account/get`);
  }
}
