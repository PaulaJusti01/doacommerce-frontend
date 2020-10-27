import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin) {
    return this.http.post('https://doa-commerce-backend.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario) {
    return this.http.post('https://doa-commerce-backend.herokuapp.com/usuarios/cadastrar', usuario)
  }

  btnSair() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }
    return ok
  }

  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok

  }

  isONG() {
    let ok = false
    let tipoPessoa = localStorage.getItem('tipoPessoa')

    if (this.isAdmin() || tipoPessoa == '3') {
      ok = true
    }
    return ok
  }

  isAdmin() {
    let ok = false
    let tipoPessoa = localStorage.getItem('tipoPessoa')

    if (tipoPessoa == '0') {
      ok = true
    }
    
    return ok
  }

  isLogado() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }
    return ok
  }


}
