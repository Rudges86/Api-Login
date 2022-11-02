import { ICadastro } from './../models/interface/Cadastrointerface/ICadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = 'http://localhost:3000/cadastro'
  constructor(private http:HttpClient) { }

  createUser(user:ICadastro):Observable<ICadastro>{
    return this.http.post<ICadastro>(this.baseUrl,user)
     /*this.http.post<any>(this.baseUrl,'user',{
      observe:'response'
    })*/

  }
}
