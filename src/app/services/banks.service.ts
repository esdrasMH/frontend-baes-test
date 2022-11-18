import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  private URL = 'https://listadobancos.herokuapp.com/api/listado_banco';

  constructor(private http: HttpClient) { }

  getBanks() {
    return this.http.get<any>(this.URL);
  }
}
