import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-pag-ticket',
  templateUrl: './pag-ticket.component.html',
  styleUrls: ['./pag-ticket.component.css']
})
export class PagTicketComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)

  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg';
  }

}


