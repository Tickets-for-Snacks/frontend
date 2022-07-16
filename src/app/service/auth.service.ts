import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(

    private http: HttpClient,
    private router :Router

  ) { }

  login(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://ticketsforsnacks.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  register(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://ticketsforsnacks.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`https://ticketsforsnacks.herokuapp.com/usuarios/${id}`)
  }

  atualizar(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      'https://ticketsforsnacks.herokuapp.com/usuarios/atualizar',
      user
    );
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
    }

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
