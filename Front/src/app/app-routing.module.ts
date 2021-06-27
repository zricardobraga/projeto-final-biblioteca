import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/views/books/edit/edit.component';
import {ListComponent} from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

import { BorrowListComponent } from './components/views/borrow/borrowList/borrowList.component';
import { BorrowRegisterComponent } from './components/views/borrow/borrowRegister/borrowRegister.component';
import { BorrowEditComponent } from './components/views/borrow/borrowEdit/borrowEdit.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register/list', component: ListComponent },
  { path: 'register/list/edit', component: EditComponent},
  { path: 'borrow/borrowRegister', component: BorrowRegisterComponent},
  { path: 'borrow/borrowRegister/borrowList', component: BorrowListComponent},
  { path: 'borrow/borrowEdit', component: BorrowEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
