import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';


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

}
