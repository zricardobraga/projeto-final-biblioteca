import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  book!: MatTableDataSource<Book>;
  displayedColumns: string[] = [ 'status', 'cod', 'title', 'acoes'];

  //book: Books[] = [];

  constructor(private service: BooksService) {}

  ngOnInit(): void {
    this.service.list().subscribe((book) => {
      this.book = new MatTableDataSource<Book>(book);
      //this.book = book;
      console.log(book);
     });
  }
}
