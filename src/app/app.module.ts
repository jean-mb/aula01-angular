import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './core/login/login.component';
import { AdminHomeComponent } from './views/admin/admin-home/admin-home.component';
import { CarrosDetailsComponent } from './views/carros/carros-details/carros-details.component';
import { CarrosListarComponent } from './views/carros/carros-listar/carros-listar.component';
import { LivrosDetailsComponent } from './views/livros/livros-details/livros-details.component';
import { LivrosListarComponent } from './views/livros/livros-listar/livros-listar.component';
import { PessoasDetailsComponent } from './views/pessoas/pessoas-details/pessoas-details.component';
import { PessoasListarComponent } from './views/pessoas/pessoas-listar/pessoas-listar.component';

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
