import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carros-details',
  templateUrl: './carros-details.component.html',
  styleUrls: ['./carros-details.component.scss']
})
export class CarrosDetailsComponent {
  @Input() carro: Carro = new Carro("");

  @Output() carroCriado = new EventEmitter<Carro>();
  constructor(){

  }
  salvar(){
    this.carroCriado.emit(this.carro);
  }

  ngOnInit(): void {
      this.carro = Object.assign({},this.carro);
  }
}
