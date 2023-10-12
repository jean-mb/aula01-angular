import { Component, inject } from '@angular/core';
import { Livro } from '../../../models/livro/livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/services/livro/livro.service';

@Component({
  selector: 'app-livros-listar',
  templateUrl: './livros-listar.component.html',
  styleUrls: ['./livros-listar.component.scss'],
})
export class LivrosListarComponent {
  livros: Livro[] = [];
  index!: number;
  livroSelecionado = new Livro('', '');
  isErro!: boolean;
  mensagem: string = '';
  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {
    this.getAll();
  }
  getAll() {
    this.livroService.getAll().subscribe({
      next: (livros) => {
        this.livros = livros;
      },
      error: (erro) => {
        alert(erro.error);
      },
    });
  }
  abrirModal(template: any) {
    this.mensagem = '';
    this.livroSelecionado = new Livro('', '');
    this.modalService.open(template, { size: 'lg' });
  }
  salvarEditarLivro(livro: Livro) {
    if (!livro.id) {
      this.livroService.post(livro).subscribe({
        next: (success) => {
          this.getAll();
          this.isErro = false;
          this.mensagem = 'Livro cadastrado com sucesso!';
          this.modalService.dismissAll();
        },
        error: (erro) => {
          this.isErro = true;
          this.mensagem = erro.error as string;
        },
      });
    } else {
      this.livroService.put(livro.id, livro).subscribe({
        next: (success) => {
          this.getAll();
          this.isErro = false;
          this.mensagem = 'Livro editado com sucesso!';
          this.modalService.dismissAll();
        },
        error: (erro) => {
          this.isErro = true;
          this.mensagem = erro.error as string;
        },
      });
    }
  }
  editar(livroEditar: Livro, i: number, template: any) {
    this.livroSelecionado = livroEditar;
    this.index = i;
    this.modalService.open(template, { size: 'lg' });
  }
  deletar(id: number) {
    this.livroService.delete(id).subscribe({
      next: (success) => {
        this.getAll();
        this.isErro = true;
        this.mensagem = 'Livro deletado com sucesso!';
      },
      error: (erro) => {
        this.isErro = true;
        console.log(erro);
        this.mensagem = erro.error as string;
      },
    });
  }
}
