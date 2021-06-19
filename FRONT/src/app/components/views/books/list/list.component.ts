//Import Service
//Import Model
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../../../models/Book';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})

//Parei aula em 2h25/35m
export class BooksListComponent implements OnInit {

    books: Book[] = [];

    constructor(private http: HttpClient) {

        http.get<Book[]>("http://localhost:3000/library/books/list")
            .subscribe((list) => {
                console.log(list);
            });

    }

    ngOnInit(): void {


    }
    
}

