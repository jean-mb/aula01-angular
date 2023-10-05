import { Component, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss']
})
export class PessoasDetailsComponent {
  pessoa!: Pessoa;
  

  teste(){
    alert(this.pessoa.nome)
    alert(this.pessoa.idade)
  }
  constructor(){

  }
}
