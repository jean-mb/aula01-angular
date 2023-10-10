export class Pessoa {
    id!: number;
    nome!: string;
    idade!: number;

    constructor(nome: string, idade?:number){
        this.nome = nome;
        if(idade){
            this.idade = idade
        }
    }
}