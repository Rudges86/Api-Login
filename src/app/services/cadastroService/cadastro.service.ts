
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ICadastro } from 'src/app/models/interface/Cadastrointerface/ICadastro';

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
