import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/livro/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  API: string = 'http://localhost:8080/api/livros';
  http = inject(HttpClient);

  constructor() {}

  getById(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.API}/id/${id}`);
  }
  getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.API}/all`);
  }
  post(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.API}/post`, livro);
  }
  put(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.API}/put/${id}`, livro);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/delete/${id}`);
  }
}
