import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoas-listar',
  templateUrl: './pessoas-listar.component.html',
  styleUrls: ['./pessoas-listar.component.scss'],
})
export class PessoasListarComponent {
  pessoas: Pessoa[] = [];
  constructor(){
    let pessoa1: Pessoa = new Pessoa("Jean", 18);
    let pessoa2: Pessoa = new Pessoa("Vinicius", 23);
    let pessoa3: Pessoa = new Pessoa("Jean", 19);
    this.pessoas.push(pessoa1,pessoa2,pessoa3);
  }
}
