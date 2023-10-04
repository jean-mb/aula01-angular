import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListarComponent } from './pessoas/pessoas-listar/pessoas-listar.component';
import { IndexComponent } from './layout/index/index.component';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasListarComponent,
    IndexComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
