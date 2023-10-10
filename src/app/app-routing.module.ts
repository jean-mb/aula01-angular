import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './core/login/login.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';
import { CarrosListarComponent } from './views/carros/carros-listar/carros-listar.component';
import { LivrosListarComponent } from './views/livros/livros-listar/livros-listar.component';
import { PessoasListarComponent } from './views/pessoas/pessoas-listar/pessoas-listar.component';

const routes: Routes = [
  {path: "",  redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "app", component: IndexComponent, children: [
    {path: "", component: AdminHomeComponent},
    {path: "pessoas", component: PessoasListarComponent},
    {path: "carros", component: CarrosListarComponent},
    {path: "livros", component: LivrosListarComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
