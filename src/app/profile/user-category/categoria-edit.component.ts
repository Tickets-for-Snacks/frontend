import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  idCategoria: number
  categoria: Categoria = new Categoria()
  categoriaAdd: Categoria = new Categoria()
  categoriaEdit: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
   this.getAllCategoria()
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

  cadastrar(){
    this.categoriaService.postCategoria(this.categoriaAdd).subscribe((resp: Categoria) =>{
      this.categoriaAdd = resp
      alert('Categoria cadastrado com sucesso!')
      //this.findAllCategoria()
      this.categoriaAdd = new Categoria()
    })
  }

    atualizar(){
      this.categoriaService.putCategoria(this.categoriaEdit).subscribe((resp: Categoria)=>{
        this.categoriaEdit = resp
        alert('Categoria atualizado com sucesso!')
      })
  }
}




