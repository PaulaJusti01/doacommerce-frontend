import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private alert: AlertasService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  envia(){
this.alert.showAlertSuccess("Sua mensagem foi enviada com sucesso")
this.router.navigate(["/home"])
  }
}
