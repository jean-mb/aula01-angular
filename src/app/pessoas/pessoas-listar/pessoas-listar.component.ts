import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pessoas-listar',
  templateUrl: './pessoas-listar.component.html',
  styleUrls: ['./pessoas-listar.component.scss'],
})
export class PessoasListarComponent {
  pessoas: Pessoa[] = []
  modalService = inject(NgbModal);

  constructor() {}
  abrirModal(details: any){
    this.modalService.open(details, { size: 'lg' });
  }
  salvarPessoa(pessoa: Pessoa){ 
    if(this.pessoas.length != 0){
      let novoID = this.pessoas[this.pessoas.length-1].id+1
      pessoa.id = novoID
    }else{
      pessoa.id = 1;  
    }
    this.pessoas.push(pessoa);
    this.modalService.dismissAll();
  }
  editar(id: number){
    alert(id); 
  }
}
