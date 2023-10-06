export class Carro {
    id!: number;
    modelo!: string;
    ano!: number;
    constructor(modelo:string, ano?:number){
        this.modelo = modelo;
        if(ano){
            this.ano = ano;
        }
    }
}
