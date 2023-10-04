import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';

const routes: Routes = [
  {path: "",  component: IndexComponent},
  {path: "",  redirectTo: "login", pathMatch: "full"},
  {path: "login", component: IndexComponent},
  {path: "admin", component: IndexComponent, children: [
    
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
