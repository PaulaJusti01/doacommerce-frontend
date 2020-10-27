import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';


@Component({
  selector: 'app-lista-produto-categoria',
  templateUrl: './lista-produto-categoria.component.html',
  styleUrls: ['./lista-produto-categoria.component.css']
})
export class ListaProdutoCategoriaComponent implements OnInit {

  listaCategoria: Categoria[]
  categoria: Categoria = new Categoria
  categoriaNome: string
  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private alert: AlertasService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.categoriaNome = this.route.snapshot.params['categoria']
    this.findAllCategoriaByNome()

  }

  findAllCategoriaByNome() {
    this.categoriaService.getCategoriaByName(this.categoriaNome).subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp


    })
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
