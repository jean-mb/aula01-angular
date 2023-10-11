import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../../models/pessoa/pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  API: string = 'http://localhost:8080/api/pessoas';
  http = inject(HttpClient);

  constructor() {}

  getById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${this.API}/all`);
  }
  post(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${this.API}/post`, pessoa);
  }
  put(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.API}/put/${id}`, pessoa);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/delete/${id}`);
  }
}
