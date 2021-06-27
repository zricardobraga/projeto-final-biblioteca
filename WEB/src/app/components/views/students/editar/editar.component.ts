import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private service: StudentsService) { }

  ngOnInit(): void {
  }

}
