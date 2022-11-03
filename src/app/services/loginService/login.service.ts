
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICadastro } from 'src/app/models/interface/Cadastrointerface/ICadastro';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:3000/cadastro';

  constructor(private http: HttpClient) { }

  autenticLogin(email: string): Observable<ICadastro[]> {

    return this.http.get<ICadastro[]>(`${this.baseUrl}/?email=${email}`)


  }
}
