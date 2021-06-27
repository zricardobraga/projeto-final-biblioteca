import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/views/books/edit/edit.component';
import { ListComponent } from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

import { StudentRegisterComponent } from './components/views/students/register/register.component';
import { StudentListComponent } from './components/views/students/list/list.component';
import { StudentEditComponent } from './components/views/students/edit/edit.component';

const routes: Routes = [
   //Book
    { path: 'register', component: RegisterComponent },
    { path: 'register/list', component: ListComponent },
    { path: 'register/list/edit/:cod', component: EditComponent },

  //Student
    { path: 'library/students/list', component: StudentListComponent },
    { path: 'library/students/register', component: StudentRegisterComponent },
    { path: 'library/students/edit', component: StudentEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }