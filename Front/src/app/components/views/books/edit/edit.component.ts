import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Books } from 'src/app/models/Books';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: Books = new Books();
  
  constructor(private service: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void { }

  edit(): void {
    const cod = this.route.snapshot.paramMap.get('cod');
    this.service.getBook(cod!).subscribe((book) => {
      console.log(book);
      this.book = book;
    });
   }
}
