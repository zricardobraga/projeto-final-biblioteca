import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/students/cadastrar/cadastrar.component';
import { EditarComponent } from './components/views/students/editar/editar.component';
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
  },
  {
    //Rota para editar os estudantes
    path: 'library/students/edit',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
