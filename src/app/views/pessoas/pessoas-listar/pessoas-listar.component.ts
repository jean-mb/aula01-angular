import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-listar',
  templateUrl: './pessoas-listar.component.html',
  styleUrls: ['./pessoas-listar.component.scss'],
})
export class PessoasListarComponent {
  pessoas: Pessoa[] = [];
  index!: number;
  pessoaSelecionada = new Pessoa('');
  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);

  constructor() {
    this.getAll();
  }
  getAll() {
    this.pessoaService.getAll().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (erro) => {
        alert(erro.error);
      },
    });
  }
  abrirModal(template: any) {
    this.pessoaSelecionada = new Pessoa('');
    this.modalService.open(template, { size: 'lg' });
  }
  salvarEditarPessoa(pessoa: Pessoa) {
    if (!pessoa.id) {
      this.pessoaService.post(pessoa).subscribe({
        next: (success) => {
          this.getAll();
        },
        error: (erro) => {
          alert(erro.error);
        },
      });
    } else {
      this.pessoaService.put(pessoa.id, pessoa).subscribe({
        next: (success) => {
          this.getAll();
        },
        error: (erro) => {
          alert(erro.error);
          console.log(erro);
        },
      });
    }

    this.modalService.dismissAll();
  }
  editar(pessoaEditar: Pessoa, i: number, template: any) {
    this.pessoaSelecionada = pessoaEditar;
    this.index = i;
    this.modalService.open(template, { size: 'lg' });
  }
  deletar(id: number) {
    this.pessoaService.delete(id).subscribe({
      next: (success) => {
        this.getAll();
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
