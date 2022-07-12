import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
    
  ) { }

token={
  headers: new HttpHeaders().set('Authorization', environment.token)
}

postCategoria(categoria: Categoria): Observable<Categoria>{
  return this.http.post<Categoria>('https://ticketsforsnacks.herokuapp.com/categorias', categoria, this.token)
}
}


