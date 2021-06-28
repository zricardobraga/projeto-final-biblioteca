import { BooksService } from 'src/app/services/books.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


import { Books } from 'src/app/models/Books';
import { Student } from "src/app/models/Students";
import { Borrow } from "../../../../models/Borrow";  
import { BorrowService } from "src/app/services/borrow.service";

@Component({
  selector: 'app-register',
  templateUrl: './borrowRegister.component.html',
  styleUrls: ['./borrowRegister.component.css']
})
export class BorrowRegisterComponent implements OnInit {
  bookCollumn = ["cod", "titulo", "status"];
  
  data!: string;

  bookCod!: string;
  bookTitle!: string;
  bookIsAvailable!: boolean;
  booksBorrow: Books[] = [];
  books!: MatTableDataSource<Books>;

  book = new Books();

  constructor(private serviceBorrow: BorrowService, private serviceBook: BooksService, private routeActivated: ActivatedRoute, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  borrowRegister(): void {
  let borrow = new Borrow();
  borrow.borrowBooks = this.books.data;  
  this.serviceBorrow.borrowRegister(borrow).subscribe((borrow) => {
  this.snack.open("Empréstimo realizado com sucesso", "Empréstimo", {
   duration: 3000,
   horizontalPosition: "right",
   verticalPosition: "top",  
    });
      this.router.navigate(["borrow/borrowList"]);
 });
}

  addBook(): void {
    this.serviceBook.getBook(this.bookCod!).subscribe((book) => {
      this.book = book;
      this.booksBorrow.push(book);
      this.books = new MatTableDataSource<Books>(this.booksBorrow);
      console.log(this.books);
      this.books._updateChangeSubscription();
      this.bookCod = "";
    });
  
  }



  



}
