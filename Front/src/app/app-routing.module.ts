import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './components/views/books/edit/edit.component';
import {ListComponent} from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register/list', component: ListComponent },
  { path: 'register/list/edit/:cod', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }