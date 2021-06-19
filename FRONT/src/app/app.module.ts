import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { BooksListComponent } from './components/views/books/list/list.component';
import { BookRegisterComponent } from './components/views/books/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
