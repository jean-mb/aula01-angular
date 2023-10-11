import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carro/carro.service';

@Component({
  selector: 'app-carros-listar',
  templateUrl: './carros-listar.component.html',
  styleUrls: ['./carros-listar.component.scss'],
})
export class CarrosListarComponent {
  carros: Carro[] = [];
  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  carroSelecionado = new Carro('');
  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {
    this.getAll();
  }
  getAll() {
    this.carroService.getAll().subscribe({
      next: (carros) => {
        this.carros = carros;
      },
      error: (erro) => {
        alert(erro.error);
      },
    });
  }
  abrirModal(template: any) {
    this.mensagem = '';
    this.carroSelecionado = new Carro('');
    this.modalService.open(template, { size: 'lg' });
  }
  salvarEditarCarro(carro: Carro) {
    if (!carro.id) {
      this.carroService.post(carro).subscribe({
        next: (success) => {
          this.getAll();
          this.isErro = false;
          this.mensagem = 'Carro cadastrado com sucesso!';
          this.modalService.dismissAll();
        },
        error: (erro) => {
          this.isErro = true;
          this.mensagem = erro.error as string;
        },
      });
    } else {
      this.carroService.put(carro.id, carro).subscribe({
        next: (success) => {
          this.getAll();
          this.isErro = false;
          this.mensagem = 'Carro editado com sucesso!';
          this.modalService.dismissAll();
        },
        error: (erro) => {
          this.isErro = true;
          this.mensagem = erro.error as string;
        },
      });
    }
  }
  editar(carroEditar: Carro, i: number, template: any) {
    this.carroSelecionado = carroEditar;
    this.index = i;
    this.modalService.open(template, { size: 'lg' });
  }
  deletar(id: number) {
    this.carroService.delete(id).subscribe({
      next: (success) => {
        this.getAll();
        this.isErro = true;
        this.mensagem = 'Carro deletado com sucesso!';
      },
      error: (erro) => {
        this.isErro = true;
        console.log(erro);
        this.mensagem = erro.error as string;
      },
    });
  }
}
