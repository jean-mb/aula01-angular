import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';


@Component({
  selector: 'app-pessoas-listar',
  templateUrl: './pessoas-listar.component.html',
  styleUrls: ['./pessoas-listar.component.scss'],
})
export class PessoasListarComponent {
  teste(){
    alert("oi")
  }
  constructor() {}

}
