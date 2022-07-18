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
  styleUrls: ['./user-product.component.css'],
})
export class UserProductComponent implements OnInit {
  produtoAdicionar: Produto = new Produto();
  produtoAlterar: Produto = new Produto();
  produtoApagar: Produto = new Produto();
  produto: Produto = new Produto();

  listaProdutos: Produto[];
  listaCategorias: Categoria[];

  categoria: Categoria = new Categoria();
  usuario: Usuario = new Usuario();

  idCategoria: number;
  idProduto: number;

  idUsuario = environment.id;

  categoriaProduto: string

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.findAllProduto();
    this.findAllCategoria();
    this.findByIdUsuario();


  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  findByIdProduto() {
    this.produtoService
      .getByIdProduto(this.idProduto)
      .subscribe((resp: Produto) => {
        this.produto = resp;
      });
  }

  findByIdCategoria() {
    if (typeof this.categoria == typeof 1) {
      this.categoriaService
        .getByIdCategoria(this.idCategoria)
        .subscribe((resp: Categoria) => {
          this.categoria = resp;
        });
    } else {
    }
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp) => {
      this.usuario = resp;
    });
  }

  findByCategoriaProduto() {
    if(this.categoriaProduto == ''){
      this.findAllProduto()
    }else{
      this.produtoService.getByNomeProduto(this.categoriaProduto).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

  cadastrar() {
    this.categoria.id = this.idCategoria;
    this.produtoAdicionar.categorias = this.categoria;

    this.usuario.id = this.idUsuario;
    this.produtoAdicionar.usuarios = this.usuario;

    this.produtoService
      .postProduto(this.produtoAdicionar)
      .subscribe((resp: Produto) => {
        this.produtoAdicionar = resp;
        this.findByIdUsuario();
        this.findAllProduto()
        this.produtoAdicionar = new Produto();
        alert('Produto cadastrado com sucesso!');
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Campo não foi preenchido corretamente')
          this.findByIdProduto();
        }
      });
  }

  atualizar() {
    this.produtoService
      .putProduto(this.produtoAlterar)
      .subscribe((resp: Produto) => {
        this.produtoAlterar = resp;
        this.produtoAlterar = new Produto();
        alert('Produto atualizado com sucesso!');
        this.findByIdUsuario();
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Campo não foi preenchido corretamente')
          this.findByIdUsuario();
        }
      });
  }

  deletar() {
    this.produtoService
    .deleteProduto(this.produtoApagar.id)
    .subscribe(() => {
      alert('Produto excluído!');
      this.findByIdUsuario();
    });
  }

  editar(itemId: number) {
    let result = this.listaProdutos.filter((x) => x.id == itemId);
    this.produtoAlterar = result[0];
    this.idCategoria = this.produtoAlterar.categorias.id;
    // this.idCategoria = itemId.categorias.id;
    console.log(this.listaProdutos.filter((x) => x.id == itemId));
  }

  apagar(itemId: number) {
    console.log(this.idProduto);
    let result = this.listaProdutos.filter((x) => x.id == itemId);
    this.produtoApagar = result[0];
    // this.idCategoria = itemId.categorias.id;
    console.log(this.listaProdutos.filter((x) => x.id == itemId));
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }
}
