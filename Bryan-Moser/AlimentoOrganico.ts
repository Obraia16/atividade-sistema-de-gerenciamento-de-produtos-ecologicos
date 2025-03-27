import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;

    constructor(nome: string, preco: number, dataValidade: Date) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
    }
}
