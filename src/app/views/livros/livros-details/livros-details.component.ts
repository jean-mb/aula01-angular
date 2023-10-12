import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Livro } from '../../../models/livro/livro';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.scss'],
})
export class LivrosDetailsComponent {
  @Input() livro: Livro = new Livro('', '');
  @Input() isErro: boolean = true
  @Input() mensagem: string = ""
  @Output() livroCriado = new EventEmitter<Livro>();
  constructor() {}
  salvar() {
    this.livroCriado.emit(this.livro);
  }

  ngOnInit(): void {
    this.livro = Object.assign({}, this.livro);
  }
}
