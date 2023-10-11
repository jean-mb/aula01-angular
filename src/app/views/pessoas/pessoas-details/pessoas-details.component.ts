import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa/pessoa';


@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss']
})
export class PessoasDetailsComponent implements OnInit {
  @Input() pessoa: Pessoa = new Pessoa("");
  @Input() isErro: boolean = true
  @Input() mensagem: string = ""
  @Output() pessoaCriada = new EventEmitter<Pessoa>();

  constructor(){}
  salvar(){
    this.pessoaCriada.emit(this.pessoa);
  }

  ngOnInit(): void {
      this.pessoa = Object.assign({},this.pessoa);
  }
}
