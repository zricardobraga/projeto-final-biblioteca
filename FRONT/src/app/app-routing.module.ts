import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/views/books/list/list.component';

const routes: Routes = [
  {
    path: '/library/books/list',
    component: BooksListComponent
  },
  {
    path: '/library/books/create',
    // component: 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
