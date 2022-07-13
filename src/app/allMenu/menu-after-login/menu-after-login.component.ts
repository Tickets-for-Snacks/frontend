import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-after-login',
  templateUrl: './menu-after-login.component.html',
  styleUrls: ['./menu-after-login.component.css']
})
export class MenuAfterLoginComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id
  tipo = environment.tipo

  constructor(private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
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
