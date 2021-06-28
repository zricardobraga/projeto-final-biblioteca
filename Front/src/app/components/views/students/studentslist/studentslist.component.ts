import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Students } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {

  student!: MatTableDataSource<Students>;
  displayedColumns: string[] = [ 'nome', 'cpf', 'address', 'acoes'];

  constructor(private service: StudentsService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((student) => {
      this.student = new MatTableDataSource<Students>(student);
     });
  }

  delete(_id: string): void {
    this.service.delete(_id).subscribe((student) => {
      this.student = new MatTableDataSource<Students>(student);
      this.router.navigate(['register/students/list']);
      this.ngOnInit();
    });
    alert("Estudante deletado com sucesso!");
  }

}
