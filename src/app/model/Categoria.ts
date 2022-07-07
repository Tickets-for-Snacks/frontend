import { Produto } from "./Produto";

export class Categoria {
  id: number;
  descricaoCategoria: string;
  iconeCategoria: string;
  produtos: Produto[]
}
