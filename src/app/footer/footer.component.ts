import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id : number
  usuario: Usuario = new Usuario()


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    window.scroll(0,0)

    if (environment.token == '') {
    //  alert('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/home']);
      console.log(environment.id)
    }
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
