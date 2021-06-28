import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/template/home/home.component';

import { EditComponent } from './components/views/books/edit/edit.component';
import {ListComponent} from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';
import { StudentseditComponent } from './components/views/students/studentsedit/studentsedit.component';
import { StudentslistComponent } from './components/views/students/studentslist/studentslist.component';
import { StudentsregisterComponent } from './components/views/students/studentsregister/studentsregister.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register/books', component: RegisterComponent },
  { path: 'register/books/list', component: ListComponent },
  { path: 'register/books/list/edit', component: EditComponent},
  
  { path: 'register/students', component: StudentsregisterComponent},
  { path: 'register/students/list', component: StudentslistComponent},
  { path: 'register/students/list/edit', component: StudentseditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
