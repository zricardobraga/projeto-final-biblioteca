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

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let student = new Student();
    student.name = (this.name);
    this.service.cadastrar(student).subscribe((student) => {
      console.log(student);
    }); 
  }

}
