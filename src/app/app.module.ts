import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoasListarComponent } from './components/pessoas/pessoas-listar/pessoas-listar.component';
import { IndexComponent } from './components/layout/index/index.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PessoasDetailsComponent } from './components/pessoas/pessoas-details/pessoas-details.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CarrosDetailsComponent } from './components/carros/carros-details/carros-details.component';
import { CarrosListarComponent } from './components/carros/carros-listar/carros-listar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LivrosDetailsComponent } from './components/livros/livros-details/livros-details.component';
import { LivrosListarComponent } from './components/livros/livros-listar/livros-listar.component';
import { LoginComponent } from './components/sistema/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasListarComponent,
    IndexComponent,
    FooterComponent,
    PessoasDetailsComponent,
    HeaderComponent,
    LoginComponent,
    AdminHomeComponent,
    CarrosListarComponent,
    CarrosDetailsComponent,
    LivrosDetailsComponent,
    LivrosListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
