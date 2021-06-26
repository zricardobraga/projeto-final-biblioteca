import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  name!: string;
  cpf!: string;
  address!: string;

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let student = new Student();
    student.name = (this.name);
    student.cpf = (this.cpf);
    student.address = (this.address);
    this.service.cadastrar(student).subscribe((student) => {
      console.log(student);
    }); 
  }

}
