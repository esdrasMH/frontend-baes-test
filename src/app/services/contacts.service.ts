import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private URL = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  createContact(newContact: any) {
    return this.http.post<any>(`${this.URL}/contact/create`, newContact);
  }

  getContacts() {
    return this.http.get<any>(`${this.URL}/contact/get`);
  }
}
