import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:5000/api/v1';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(user: any) {
    return this.http.post(`${this.URL}/auth/signup`, user);
  }

  signIn(user: any) {
    return this.http.post(`${this.URL}/auth/signin`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
