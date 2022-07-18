import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import arrayShuffle from 'array-shuffle';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[]

  nome = environment.nome
  foto = environment.foto
  id : number
  usuario: Usuario = new Usuario()


  constructor(private router: Router,private produtoService: ProdutoService, private authService: AuthService) { }

  ngOnInit(){

    this.getAllProdutos()

  }

  key = 'data'
  reverse = true

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.id).subscribe((resp) => {
      this.usuario = resp;
    });
  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
      let shuffle = arrayShuffle(this.listaProdutos)
      this.listaProdutos = shuffle
      console.log(this.listaProdutos)
    });

  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }


  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }
    this.id = environment.id
    return ok;
  }

  noLogado() {
    let ok: boolean = false;

    if (environment.token == '') {
      ok = true;
    }

    return ok;
  }

}
