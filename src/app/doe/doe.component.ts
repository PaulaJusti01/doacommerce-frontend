import { CategoriaService } from './../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-doe',
  templateUrl: './doe.component.html',
  styleUrls: ['./doe.component.css']
})
export class DoeComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]
  listaProdutosCategoria: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.findAllCategorias()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

}
