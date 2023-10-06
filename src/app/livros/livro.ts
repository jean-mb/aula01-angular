export class Livro {
    id!: number;
    titulo!: string;
    autor!: string; 

    constructor(titulo:string, autor:string){
        this.titulo = titulo;
        this.autor = autor;
    }
}
