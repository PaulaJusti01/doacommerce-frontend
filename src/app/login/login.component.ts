import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  

  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      localStorage.setItem('tipoPessoa', this.userLogin.tipoPessoa.toString())
      this.router.navigate(['/home'])
    })
  }

}
