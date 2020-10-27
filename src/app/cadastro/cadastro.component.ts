

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuario: Usuario = new Usuario()
  senha: string
  emailOk =false
  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  verificaEmail(){
    let txt = document.getElementById("txtEmail")
 if(this.usuario.email.indexOf("@") == -1 || this.usuario.email.indexOf(".") == -1){
  txt.innerHTML = "X E-mail inválido. Por favor, digite um e-mail válido."
  txt.style.color ="red"
  this.emailOk = false
 }else{
   txt.innerHTML = "✓ E-mail válido."
   txt.style.color ="green"

   this.emailOk = true

 }
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar(){
  // this.usuario.cpfCpnj=12346567892
  //   this.usuario.idade=20
  //   this.usuario.endereco="rua da doação"
    // this.usuario.tipoPessoa=1
    this.usuario.produto=[]
    this.usuario.produtoDoacao=[]

    if(this.senha === this.usuario.senha || this.emailOk){
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso')
      })


    }else{
      this.alert.showAlertDanger('Usuario não cadastrado, digite suas senhas iguais')
    }

  }

}
