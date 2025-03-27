import { AlimentoOrganico } from "./AlimentoOrganico";
import { GerenciadorProdutos } from "./GerrenciadorProdutos";
import { ItemDecoracaoSustentavel } from "./itemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutolimpezaBiodegradavel";

const gerenciador = new GerenciadorProdutos();


const maca = new AlimentoOrganico("Maçã Orgânica", 5.99, new Date("2024-12-31"));
const detergente = new ProdutoLimpezaBiodegradavel("Detergente Natural", 12.50, 500);
const vaso = new ItemDecoracaoSustentavel("Vaso de Vidro", 29.90, "Vidro Reciclado");

console.log(maca);
console.log(detergente);
console.log(vaso);

gerenciador.adicionarProduto(maca);
gerenciador.adicionarProduto(detergente);
gerenciador.adicionarProduto(vaso);

gerenciador.listarProdutos();


