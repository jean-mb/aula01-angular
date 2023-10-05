import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasListarComponent } from './pessoas/pessoas-listar/pessoas-listar.component';
import { PessoasDetailsComponent } from './pessoas/pessoas-details/pessoas-details.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

const routes: Routes = [
  {path: "",  redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "app", component: IndexComponent, children: [
    {path: "", component: AdminHomeComponent},
    {path: "pessoas", component: PessoasListarComponent},
    {path: "pessoas/novo", component: PessoasDetailsComponent},
    {path: "pessoas/editar/:id", component: PessoasDetailsComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
