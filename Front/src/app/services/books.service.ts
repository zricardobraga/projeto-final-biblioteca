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

  list(): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.baseUrl}library/books/list`);
  }
}
