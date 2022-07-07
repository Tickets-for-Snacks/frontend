import { Categoria } from "./Categoria"

export class Produto{
  id: number
  nomeTicket: string
  valorTicket: number
  descricaoTicket: string
  dataHoraTicket: Date
  foto: string
  categorias: Categoria
}
