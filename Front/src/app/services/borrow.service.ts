import { Borrow } from './../models/Borrow';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BorrowService {

    private baseUrl = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    borrowList(): Observable<Borrow[]> {
        return this.http.get<Borrow[]>(`${this.baseUrl}library/borrow/list`);
    }

    borrowRegister(borrow: Borrow): Observable<Borrow> {
        return this.http.post<Borrow>(`${this.baseUrl}library/borrow/register`, borrow);
    }

}
