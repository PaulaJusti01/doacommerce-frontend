import { AlertasService } from './../service/alertas.service';
import { Produto } from './../model/Produto';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';
import { ProdutoService } from './../service/produto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private http: HttpClient,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllProdutosByUrgente()
    this.findAllCategoria()
  }
  



  findAllProdutosByUrgente(){
    this.produtoService.getProdutoByUrgente(true).subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => { this.listaCategorias = resp})
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => { this.categoria = resp})
  }




  btnVerifica(id: number) {
    let token = localStorage.getItem('token')

    if (token == null) {
      this.alert.showAlertDanger("Voce precisa estar logado primeiro")
      this.router.navigate(["/login"])
    }
    else {
      this.router.navigate(["/delete-produto", id])
    }

  }
}
