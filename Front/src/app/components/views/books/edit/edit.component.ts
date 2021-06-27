import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: Books = new Books();
  
  constructor(private service: BooksService) { }

  ngOnInit(): void { }

  edit(): void {
    this.service.edit(this.book).subscribe(() => {
     console.log(this.book)
    })
  }
}
