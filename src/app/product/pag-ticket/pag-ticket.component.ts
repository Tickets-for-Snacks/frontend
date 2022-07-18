import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import arrayShuffle from 'array-shuffle';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-pag-ticket',
  templateUrl: './pag-ticket.component.html',
  styleUrls: ['./pag-ticket.component.css'],
})
export class PagTicketComponent implements OnInit {
  produto: Produto = new Produto();

  listaProdutos: Produto[];

  idProduto: number;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idProduto = this.route.snapshot.params['id'];
    this.findByIdProduto(this.idProduto);

    this.getAllProdutos();
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
    this.getAllProdutos()
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
      let shuffle = arrayShuffle(this.listaProdutos);
      this.listaProdutos = shuffle;
    });
  }

  getProdutoByCategoria(itemProdutos: Produto[]) {
    this.listaProdutos = itemProdutos;
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }

  comprar() {
    alert('Ticket adicionado no carrinho!');
  }
}
