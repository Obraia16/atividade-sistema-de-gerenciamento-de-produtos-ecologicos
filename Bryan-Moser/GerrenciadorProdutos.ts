import { ProdutoEcologico } from "./ProdutoEcologico";

export class GerenciadorProdutos {
    private produtos: Array<ProdutoEcologico> = new Array;

    adicionarProduto(produto: ProdutoEcologico): void {
        this.produtos.push(produto);
    }

    listarProdutos(): void {
        console.log("Lista de Produtos:");
        this.produtos.forEach(produto => produto.exibirDetalhes());
    }
}
