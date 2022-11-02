import { ICadastro } from './../models/interface/Cadastrointerface/ICadastro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../models/interface/Cadastrointerface/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3000/cadastro';

  constructor(private http: HttpClient) { }

  autenticLogin(name: string): Observable<ICadastro[]> {

    return this.http.get<ICadastro[]>(`${this.baseUrl}/?email=${name}`)


  }
}
