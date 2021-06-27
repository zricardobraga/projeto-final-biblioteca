import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  listar(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}library/students/list`);
  }

  cadastrar(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.baseURL}library/students/register`, student);
  }

  editar(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.baseURL}library/students/edit/`, student);
 }

 deletar(_id: string): Observable<Student> {
  return this.http.delete<Student>(`${this.baseURL}library/students/delete/${_id}`);
}

} 

