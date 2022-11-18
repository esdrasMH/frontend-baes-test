import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  private URL = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  getTransfers() {
    return this.http.get<any>(`${this.URL}/transfer/get`);
  }
}
