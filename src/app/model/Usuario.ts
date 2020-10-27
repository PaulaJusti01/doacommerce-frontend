import { Produto } from './Produto'
export class Usuario{
    public id: number
    public nomeRazao: string
    public email: string
    public senha: string
    public cpfCpnj: number
    public idade: number
    public endereco: string
    public tipoPessoa: number
    public produto: Produto[]
    public produtoDoacao: Produto[]


}
