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
  index!: number
  pessoaSelecionada = new Pessoa("");
  modalService = inject(NgbModal);

  constructor() {}
  abrirModal(template: any){
    this.pessoaSelecionada = new Pessoa("")
    this.modalService.open(template, { size: 'lg' });
  }
  salvarPessoa(pessoa: Pessoa){ 
    let modoNovo = true;
    if(pessoa.id > 0){
      modoNovo = false;
    }else{
      if(this.pessoas.length != 0){
        let novoID = this.pessoas[this.pessoas.length-1].id+1
        pessoa.id = novoID
      }else{
        pessoa.id = 1;  
      }
    }
    if(modoNovo){
      this.pessoas.push(pessoa);
    }else{
      this.pessoas[this.index] = pessoa
    }

    this.modalService.dismissAll();
  }
  editar(pessoaEditar: Pessoa ,i: number, template: any){
    this.pessoaSelecionada = pessoaEditar
    this.index = i;
    this.modalService.open(template, { size: 'lg' });  }
}
