import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/template/home/home.component';

import { EditComponent } from './components/views/books/edit/edit.component';
import { ListComponent } from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

import { StudentRegisterComponent } from './components/views/students/register/register.component';
import { StudentListComponent } from './components/views/students/list/list.component';
import { StudentEditComponent } from './components/views/students/edit/edit.component';

import { BorrowEditComponent } from './components/views/borrow/edit/BorrowEdit.component';
import { BorrowListComponent } from './components/views/borrow/list/BorrowList.component';
import { BorrowRegisterComponent } from './components/views/borrow/register/borrowRegister.component';

const routes: Routes = [

    {path: '', component: HomeComponent},
    //Book
    { path: 'register', component: RegisterComponent },
    { path: 'register/list', component: ListComponent },
    { path: 'register/list/edit/:cod', component: EditComponent },

    //Student
    { path: 'register/students', component: StudentRegisterComponent },
    { path: 'register/students/list', component: StudentListComponent },
    { path: 'register/students/list/edit/:cpf', component: StudentEditComponent },

    //Borrow
    { path: 'borrow/borrowRegister', component: BorrowRegisterComponent },
    { path: 'borrow/borrowRegister/borrowList', component: BorrowListComponent },
    { path: 'borrow/borrowList/borrowEdit/:id', component: BorrowEditComponent },
    //'borrow/borrowEdit/:id'
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }