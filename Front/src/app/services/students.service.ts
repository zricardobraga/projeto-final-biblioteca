import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  list(): Observable<Students[]> {
    return this.http.get<Students[]>(`${this.baseUrl}library/students/list`);
  }

  register(book: Students): Observable<Students> {
    return this.http.post<Students>(`${this.baseUrl}library/students/register`, book);
  }

  // edit(book: Books): Observable<Books> {
  //   return this.http.put<Books>(`${this.baseUrl}library/books/edit`, book);
  // }

  delete(_id: string): Observable<Students[]> {
    return this.http.delete<Students[]>(`${this.baseUrl}library/students/delete/${_id}`);
  }
}

