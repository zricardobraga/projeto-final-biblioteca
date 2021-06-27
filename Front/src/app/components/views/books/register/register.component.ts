import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  book: Books = new Books();

  constructor(private service: BooksService, private router: Router) { }

  ngOnInit(): void {}

  register(): void {
    this.service.register(this.book).subscribe((book) => {
      alert('Livro Cadastrado com sucesso');
      this.router.navigate(['register/list']);
    });
  }
}