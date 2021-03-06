import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token != '') {
      environment.token = '';
    }
  }

  login() {
    this.auth.login(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp;

        environment.id = this.usuarioLogin.id;
        environment.token = this.usuarioLogin.token;
        environment.nome = this.usuarioLogin.nome;
        environment.tipo = this.usuarioLogin.tipo;
        environment.foto = this.usuarioLogin.foto;


        this.router.navigate(['/home']);
      },
      (erro) => {
        if (erro.status == 401) {
          alert('Usuário ou senha estão incorretos!');
        }
      }
    );
  }
}
