import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  produto: Produto = new Produto()
  produtoAdd: Produto = new Produto()

  listaProdutos: Produto[]


  listaCategorias: Categoria[]
  categoria : Categoria = new Categoria()

  idCategoriaSelecionada: number
  backupFiltroCategorias: Produto[] = []

  categoriaProduto: string


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private authService: AuthService


  ) { }



  ngOnInit() {
    this.getAllCategoria()
    this.getAllProdutos()
  }

  key = 'data'
  reverse = true

  getProdutoByCategoria(itemProdutos: Produto[]){

      this.listaProdutos = itemProdutos

  }



  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }


  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
      console.log(this.categoria.produtos)
    });
  }


  findByTituloProduto() {
    if(this.categoriaProduto == ''){
      this.getAllProdutos()
    }else{
      this.produtoService.getByNomeProduto(this.categoriaProduto).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }


 /* pesquisaPorProduto(event: any){
    this.findByCategoriaProduto() = event.target.value
  }*/


  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }

}
