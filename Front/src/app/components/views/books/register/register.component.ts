import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // data!: string;
  // codbook! : string;
  // titlebook! : string;
  // statusbook! : string;

  book: Books = new Books();


  constructor(private service: BooksService) { }

  ngOnInit(): void {}

  register(): void {
    this.service.register(this.book).subscribe((book) => {
      console.log(book);
    });
    // let book = new Books();
    // book.cod = this.codbook;
    // book.title = this.titlebook;
    // book.status = this.statusbook;

  }

}
