import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  key = 'data'
  reverse = true

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  selecionado: string
  urgente: any = [
    "Sim",
    "Não"
  ]


  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alert: AlertasService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllProdutos()
    this.findAllCategoria()

  }

  urgenteSelecionado(event: any) {
    this.selecionado = event.target.value
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => { this.listaProdutos = resp })
  }

  publicar() {
    if (this.selecionado == 'Sim') {
      this.produto.urgente = true
    } else {
      this.produto.urgente = false
    }
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    if (this.produto.nome == null || this.produto.quantidade == null || this.produto.categoria == null || this.produto.urgente == null) {
      this.alert.showAlertDanger('Preencha os campos corretamente.')
    } else {
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        this.produto = new Produto()
        this.alert.showAlertSuccess('Produto postado com sucesso!')
        this.findAllProdutos()
      })
    }
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => { this.listaCategorias = resp })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => { this.categoria = resp })
  }

}
