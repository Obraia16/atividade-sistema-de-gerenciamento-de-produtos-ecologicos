import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;

    constructor(nome: string, preco: number, material: string) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
    }
}
