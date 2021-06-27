import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  book: Book = new Book();


  constructor(private service: BooksService, private router: Router) { }

  ngOnInit(): void {}

  register(): void {
    this.service.register(this.book).subscribe((book) => {
      this.router.navigate(['register/list']);
    });
  }
}

