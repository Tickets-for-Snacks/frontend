import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css'],
})
export class CategoriaEditComponent implements OnInit {
  idCategoria: number;
  categoria: Categoria = new Categoria();
  categoriaAdd: Categoria = new Categoria();
  categoriaEdit: Categoria = new Categoria();
  categoriaApagar: Categoria = new Categoria();
  listaCategorias: Categoria[];

  confirmIcone: string;
  confirmDescricao: string;

  idTeste = environment.id;

  categoriaFormAdd!: FormGroup;
  categoriaFormEdit!: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.findAllCategoria();
    this.findByIdCategoria();
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }


  cadastrar() {

      this.categoriaService
        .postCategoria(this.categoriaAdd)
        .subscribe((resp: Categoria) => {
          this.categoriaAdd = resp;
          alert('Categoria cadastrado com sucesso!');
          this.findAllCategoria();
          this.categoriaAdd = new Categoria();
        },
        (erro) => {
          if (erro.status == 400) {
            alert('Campo não foi preenchido corretamente')
            this.findAllCategoria();
          }
        });

  }

  atualizar() {
    this.categoriaService
      .putCategoria(this.categoriaEdit)
      .subscribe((resp: Categoria) => {
        this.categoriaEdit = resp;
        this.categoriaEdit = new Categoria();
        alert('Categoria atualizado com sucesso!');
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Campo não foi preenchido corretamente')
          this.findAllCategoria();
        }
      });
  }

  deletar() {
    this.categoriaService
      .deleteCategoria(this.categoriaApagar.id)
      .subscribe(() => {
        alert('Produto excluído!');
        this.findAllCategoria();
      });
  }

  editar(itemId: number) {
    let result = this.listaCategorias.filter((x) => x.id == itemId);
    this.categoriaEdit = result[0];
    this.idCategoria = this.categoriaEdit.id;
    console.log(this.listaCategorias.filter((x) => x.id == itemId));
  }

  apagar(itemId: number) {
    let result = this.listaCategorias.filter((x) => x.id == itemId);
    this.categoriaApagar = result[0];
    // this.idCategoria = itemId.categorias.id;
    console.log(this.listaCategorias.filter((x) => x.id == itemId));
  }
}
