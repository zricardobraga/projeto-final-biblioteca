import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  book: Books[] = [];

  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.service.list().subscribe((book) => {
      this.book = book;
      console.log(book);
     });
  }

}
