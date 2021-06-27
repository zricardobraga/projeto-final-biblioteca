import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  book!: MatTableDataSource<Books>;
  displayedColumns: string[] = [ 'status', 'cod', 'title', 'acoes'];

  bookEdit: Books = new Books();

  constructor(private service: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((book) => {
      this.book = new MatTableDataSource<Books>(book);
     });
  }

  delete(_id: string): void {
    this.service.delete(_id).subscribe((book) => {
      this.book = new MatTableDataSource<Books>(book);
      this.router.navigate(['register/list']);
      this.ngOnInit();
    });
    alert("Livro deletado com sucesso!");
  }

  // edit(id: string, book: Books): void{
  //   this.service.edit().subscribe((book) => {
  //     this.router.navigate(['library/books/edit/:_id']);
  //   });
  // }
}
