import { Borrow } from './models/Borrow';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/views/books/edit/edit.component';
import {ListComponent} from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

import { BorrowEditComponent } from './components/views/borrow/borrowEdit/BorrowEdit.component';
import { BorrowListComponent } from './components/views/borrow/borrowList/BorrowList.component';
import { BorrowRegisterComponent } from './components/views/borrow/borrowRegister/borrowRegister.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register/list', component: ListComponent },
  { path: 'register/list/edit', component: EditComponent},
  { path: 'borrow/borrowRegister', component: BorrowRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
