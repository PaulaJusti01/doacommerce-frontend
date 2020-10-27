import { Produto } from './../model/Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos() {
    return this.http.get('https://doa-commerce-backend.herokuapp.com/produtos')
  }
  getByIdProduto(id: number) {
    return this.http.get(`https://doa-commerce-backend.herokuapp.com/produtos/${id}`)
  }
  postProduto(produto: Produto ){
    return this.http.post('https://doa-commerce-backend.herokuapp.com/produtos', produto)
  }
  putProduto(produto: Produto) {
    return this.http.put('https://doa-commerce-backend.herokuapp.com/produtos', produto)
  }

  deleteProduto(id: number) {
    return this.http.delete(`https://doa-commerce-backend.herokuapp.com/produtos/${id}`)
  }

  getProdutoByUrgente(urgente: boolean){
    return this.http.get(`https://doa-commerce-backend.herokuapp.com/produtos/urgente/${urgente}`)
  }

  getByProdutoCategoria(id: number) {
    return this.http.get(`https://doa-commerce-backend.herokuapp.com/categorias/${id}`)
  }
}
