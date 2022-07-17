import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user: Usuario = new Usuario();
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario;

    if (this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.');
    } else {
      this.authService.register(this.user).subscribe((resp: Usuario) => {
        this.user = resp;
        this.router.navigate(['/login']);
        alert('Usuário cadastrado com sucesso!');
      },
      (erro) => {
        if (erro.status == 400) {
          alert('Campo não foi preenchido corretamente')
        }
      });
    }
  }
}
