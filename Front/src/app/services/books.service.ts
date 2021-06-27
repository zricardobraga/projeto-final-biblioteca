import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  list(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}library/books/list`);
  }

  register(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}library/books/register`, book);
  }

  getBook(cod: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}library/books/search/${cod}`);
  }
}
