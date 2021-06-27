import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class StudentListComponent implements OnInit {

    students: Student[] = [];

    constructor(private service: StudentsService) { }

    ngOnInit(): void {
        this.service.listar().subscribe((students) => {
            this.students = students;
            console.log(this.students);
        });
    }

}
