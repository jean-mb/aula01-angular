import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carros-listar',
  templateUrl: './carros-listar.component.html',
  styleUrls: ['./carros-listar.component.scss']
})
export class CarrosListarComponent {
  carros: Carro[] = []
  index!: number
  carroSelecionado = new Carro("");
  modalService = inject(NgbModal);

  constructor() {}
  abrirModal(template: any){
    this.carroSelecionado = new Carro("")
    this.modalService.open(template, { size: 'lg' });
  }
  salvarEditarCarro(carro: Carro){ 
    let modoNovo = true;
    if(carro.id > 0){
      modoNovo = false;
    }else{
      if(this.carros.length != 0){
        let novoID = this.carros[this.carros.length-1].id+1
        carro.id = novoID
      }else{
        carro.id = 1;  
      }
    }
    if(modoNovo){
      this.carros.push(carro);
    }else{
      this.carros[this.index] = carro
    }

    this.modalService.dismissAll();
  }
  editar(pessoaEditar: Carro ,i: number, template: any){
    this.carroSelecionado = pessoaEditar
    this.index = i;
    this.modalService.open(template, { size: 'lg' });  }
}
