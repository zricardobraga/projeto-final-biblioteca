import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListComponent} from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';

const routes: Routes = [
  { path: 'register/list', component: ListComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
