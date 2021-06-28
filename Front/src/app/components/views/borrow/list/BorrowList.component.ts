import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { BorrowService } from 'src/app/services/borrow.service'; 
import { Borrow } from '../../../../models/Borrow';
@Component({
  selector: 'app-borrowList',
  templateUrl: './borrowList.component.html',
  styleUrls: ['./borrowList.component.css']
})

export class BorrowListComponent implements OnInit {

  borrows!: MatTableDataSource<Borrow>;
  displayedColumns: String[] = ['id', 'estudante', 'livros', 'dataEmprestimo', 'dataRetorno'];
  
  constructor(private service: BorrowService) { }

  ngOnInit(): void {
    this.service.borrowList().subscribe((borrows) => {
      this.borrows = new MatTableDataSource<Borrow>(borrows);
      console.log(borrows);
    }); 
  }
}
