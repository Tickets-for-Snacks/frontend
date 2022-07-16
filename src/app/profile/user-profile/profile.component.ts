import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUser: number;
  confirmSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.idUser = this.route.snapshot.params['id'];
    this.findByIdUsuario(this.idUser);


  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario;

    if (this.usuario.senha != this.confirmSenha) {
      alert('As senhas estão incorretas.');
    } else {
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Usuário atualizado com sucesso, faça login novamente!');
        environment.token = '';
        environment.nome = '';
        environment.foto = '';
        environment.id = 0;
        this.router.navigate(['/login']);
      });
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/UB7iHgs.png';
  }
}
