import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

/* Component */
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { ContentComponent } from './components/template/content/content.component';

/*Book*/
import { ListComponent } from './components/views/books/list/list.component';
import { RegisterComponent } from './components/views/books/register/register.component';
import { EditComponent } from './components/views/books/edit/edit.component';

/*Student */
import { StudentslistComponent } from './components/views/students/studentslist/studentslist.component';
import { StudentsregisterComponent } from './components/views/students/studentsregister/studentsregister.component';
import { StudentseditComponent } from './components/views/students/studentsedit/studentsedit.component';
import { HomeComponent } from './components/template/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    RegisterComponent,
    EditComponent,
    StudentslistComponent,
    StudentsregisterComponent,
    StudentseditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
