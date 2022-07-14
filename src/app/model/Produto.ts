import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
  id: number
  nomeTicket: string
  valorTicket: number
  descricaoTicket: string
  dataHoraTicket: Date
  foto: string
  categorias: Categoria
  usuarios: Usuario
}
