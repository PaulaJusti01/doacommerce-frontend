import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoCategoriaComponent } from './produto-categoria/produto-categoria.component';
import { DoeComponent } from './doe/doe.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';
import { from } from 'rxjs';
import { ListaProdutoCategoriaComponent } from './lista-produto-categoria/lista-produto-categoria.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    SaibaMaisComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContatoComponent,
    LoginComponent,
    CadastroComponent,
    ProdutoComponent,
    ProdutoCategoriaComponent,
    DoeComponent,
    PutProdutoComponent,
    DeleteProdutoComponent,
    PutCategoriaComponent,
    DeleteCategoriaComponent,
    AlertasComponent,
    ListaProdutoCategoriaComponent,
    PesquisaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
