import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from 'src/app/models/Students';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-studentsregister',
  templateUrl: './studentsregister.component.html',
  styleUrls: ['./studentsregister.component.css']
})
export class StudentsregisterComponent implements OnInit {

  student: Students = new Students();

  constructor(private service: StudentsService, private router: Router) { }

  ngOnInit(): void {}

  register(): void {
    this.service.register(this.student).subscribe((book) => {
      alert('Estudante Cadastrado com sucesso');
      this.router.navigate(['register/students/list']);
    });
  }

}
