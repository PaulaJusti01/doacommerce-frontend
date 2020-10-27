
import { Categoria } from './Categoria'
import { Usuario } from './Usuario'

export class Produto{
    public id: number
    public quantidade: number
    public nome: string
    public urgente: boolean
    public categoria: Categoria
    public doacao: Usuario[]
    public usuario: Usuario
    public img: string
    public texto: string



}
