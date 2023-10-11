import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carro/carro';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  API: string = 'http://localhost:8080/api/carros';
  http = inject(HttpClient);

  constructor() {}

  getById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.API}/all`);
  }
  post(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.API}/post`, carro);
  }
  put(id: number, carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(`${this.API}/put/${id}`, carro);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/delete/${id}`);
  }
}
