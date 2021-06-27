import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
// export class ListarComponent implements OnInit {

//   students: Student[] = [];

//   constructor(private service: StudentsService) {}

//   ngOnInit(): void {
//     //Carregar os estudantes que estão na API
//     this.service.listar().subscribe((students) => {
//       this.students = students;
//       console.log(this.students);
//     });
//   }
  

// }

export class ListComponent implements OnInit {

  students!: MatTableDataSource<Student>;
  displayedColumns: string[] = [ 'name', 'cpf', 'address', 'acoes'];

  constructor(private service: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((students) => {
      this.students = new MatTableDataSource<Student>(students);
     });
  }

  deletar(_id: string): void {
    this.service.deletar(_id).subscribe((students) => {
      this.students = new MatTableDataSource<Student>(student);
      this.router.navigate(['register/list']);
      this.ngOnInit();
    });
    alert("Livro deletado com sucesso!");
  }
}
