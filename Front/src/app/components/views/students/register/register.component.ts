import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class StudentRegisterComponent implements OnInit {

    student: Student = new Student();

    constructor(private service: StudentsService, private router: Router) { }

    ngOnInit(): void { }

    register(): void {
        this.service.cadastrar(this.student).subscribe((student) => {
            alert('Estudante Cadastrado com sucesso');
            this.router.navigate(['register/students/list']);
        });
    }

}