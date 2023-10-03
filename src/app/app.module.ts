import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListarComponent } from './app/pessoas/pessoas-listar/pessoas-listar.component';
import { IndexComponent } from './app/layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListarComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
