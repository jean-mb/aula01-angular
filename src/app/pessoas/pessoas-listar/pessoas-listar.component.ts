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
    let pessoa2: Pessoa = new Pessoa("Maria", 25);
    let pessoa3: Pessoa = new Pessoa("Carlos", 30);
    let pessoa4: Pessoa = new Pessoa("Ana", 19);
    let pessoa5: Pessoa = new Pessoa("Pedro", 53);
    let pessoa6: Pessoa = new Pessoa("Lúcia", 62);
    let pessoa7: Pessoa = new Pessoa("Miguel", 15);
    let pessoa8: Pessoa = new Pessoa("Isabel", 80);
    let pessoa9: Pessoa = new Pessoa("Ricardo", 28);
    let pessoa10: Pessoa = new Pessoa("Sofia", 90);
    this.pessoas.push(pessoa1,pessoa2,pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10);
  }
}
