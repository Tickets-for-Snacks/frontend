import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-after-login',
  templateUrl: './menu-after-login.component.html',
  styleUrls: ['./menu-after-login.component.css']
})
export class MenuAfterLoginComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  usuario: Usuario = new Usuario()
  id = environment.id

  idUsuario = environment.id


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp) => {
      this.usuario = resp;
    });
  }

  logoff(){
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
    environment.tipo = ''
    this.router.navigate(['/login'])
  }

}
