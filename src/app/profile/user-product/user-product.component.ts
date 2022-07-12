import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[] 

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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
