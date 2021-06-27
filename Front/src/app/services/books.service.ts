import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/Books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getBook(cod: string): Observable<Books> {
    return this.http.get<Books>(`${this.baseUrl}library/books/search/${cod}`);
  }

  list(): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.baseUrl}library/books/list`);
  }

  register(book: Books): Observable<Books> {
    return this.http.post<Books>(`${this.baseUrl}library/books/register`, book);
  }

  edit(id: string, request: Books) : Observable<Books> {
    const path = `${this.baseUrl}library/books/edit/${id}`;
    return this.http.put<Books>(path, request);
  }
}