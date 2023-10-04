import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListarComponent } from './pessoas/pessoas-listar/pessoas-listar.component';
import { IndexComponent } from './layout/index/index.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasDetailsComponent } from './pessoas/pessoas-details/pessoas-details.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './sistema/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListarComponent,
    IndexComponent,
    FooterComponent,
    PessoasDetailsComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
