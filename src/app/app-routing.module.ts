import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasListarComponent } from './pessoas/pessoas-listar/pessoas-listar.component';
import { PessoasDetailsComponent } from './pessoas/pessoas-details/pessoas-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CarrosListarComponent } from './carros/carros-listar/carros-listar.component';
import { LivrosListarComponent } from './livros/livros-listar/livros-listar.component';

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
