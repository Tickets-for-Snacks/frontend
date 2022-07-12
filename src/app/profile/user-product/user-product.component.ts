import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[] 
  listaCategorias: Categoria[]
  categoria : Categoria = new Categoria()
  idCategoria : number
  usuario : Usuario = new Usuario()

  idUsuario = environment.id


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private authService: AuthService


  ) { }


  ngOnInit() {
    this.getAllProdutos()
  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    });
  }
  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }


  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp) => {
      this.usuario = resp
    })
  }


  cadastrar(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      //this.findAllProduto()
      this.produto = new Produto()
    }
    )
  }
}
