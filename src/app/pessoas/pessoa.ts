export class Pessoa {
    id!: number;
    nome!: string;
    idade!: number;

    constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
}