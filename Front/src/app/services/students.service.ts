import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Students';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    baseURL = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    listar(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.baseURL}library/students/list`);
    }

    cadastrar(student: Student): Observable<Student> {
        return this.http.post<Student>(`${this.baseURL}library/students/register`, student);
    }
}
