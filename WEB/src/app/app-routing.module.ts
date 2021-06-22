import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/students/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/students/listar/listar.component';

const routes: Routes = [
  {
    //Rota para listar os estudantes
    path : 'library/students/list',
    component: ListarComponent
  },
  {
    //Rota para cadastrar os estudantes
    path: 'library/students/register',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
