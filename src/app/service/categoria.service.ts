import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllCategoria() {
    return this.http.get('https://doa-commerce-backend.herokuapp.com/categorias')
  }

  getByIdCategoria(id: number) {

    return this.http.get(`https://doa-commerce-backend.herokuapp.com/categorias/${id}`)
  }

  postCategoria(categoria: Categoria) {
    return this.http.post('https://doa-commerce-backend.herokuapp.com/categorias', categoria)

  }

  putCategoria(categoria: Categoria) {
    return this.http.put('https://doa-commerce-backend.herokuapp.com/produto-categoria', categoria)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`https://doa-commerce-backend.herokuapp.com/produto-categoria/${id}`)
  }

  getCategoriaByName(categoria: string){
    return this.http.get(`https://doa-commerce-backend.herokuapp.com/categorias/categoria/${categoria}`)
  }
}
