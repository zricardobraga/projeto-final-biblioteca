import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class StudentRegisterComponent implements OnInit {

    name!: string;
    cpf!: string;
    address!: string;

    constructor(private service: StudentsService) { }

    ngOnInit(): void {
    }

    register(): void {
        let student = new Student();
        student.name = (this.name);
        student.cpf = (this.cpf);
        student.address = (this.address);
        this.service.cadastrar(student).subscribe((student) => {
            console.log(student);
        });
    }

}
