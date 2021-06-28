import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class StudentListComponent implements OnInit {

    student!: MatTableDataSource<Student>;
    displayedColumns: string[] = ['nome', 'cpf', 'address', 'acoes'];

    constructor(private service: StudentsService, private router: Router) { }

    ngOnInit(): void {
        this.service.listar().subscribe((student) => {
            this.student = new MatTableDataSource<Student>(student);
        });
    }

    delete(_id: string): void {
        this.service.delete(_id).subscribe((student) => {
            this.student = new MatTableDataSource<Student>(student);
            this.router.navigate(['register/students/list']);
            this.ngOnInit();
        });
        alert("Estudante deletado com sucesso!");
    }
}
