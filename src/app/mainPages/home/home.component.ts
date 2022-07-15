import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id : number
  usuario: Usuario = new Usuario()

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.id).subscribe((resp) => {
      this.usuario = resp;
    });
  }


  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }
    this.id = environment.id
    return ok;
  }

  noLogado() {
    let ok: boolean = false;

    if (environment.token == '') {
      ok = true;
    }

    return ok;
  }

}
