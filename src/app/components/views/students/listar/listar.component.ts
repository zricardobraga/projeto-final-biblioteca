import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/Students';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  students : Students[] = [];

  constructor(private http: HttpClient) {
    http.get<Students[]>("http://localhost:3000/library/students/list").subscribe((lista) => {
      this.students = lista;
      console.log(this.students);
    });
   }

  ngOnInit(): void {
    
    //Carregar os estudantes que estão na API
  }

  

}
