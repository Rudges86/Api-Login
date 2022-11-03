import { Router } from '@angular/router';
import { ILogin } from './../../models/interface/Cadastrointerface/ILogin';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/services/msgService/msg.service';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup = this.fb.group({
    userName: ['rudges86@gmail.com', [Validators.required, Validators.email]],
    password: ['Rudge123@', Validators.required]
  })



  constructor(
    private fb: FormBuilder,
    private msg: MsgService,
    private loginService: LoginService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const usuario = this.login.get("userName")?.value
    const senha = this.login.get("password")?.value

    if (this.login.invalid) {
      return this.msg.showMensage('Login ou Senha inválido', true)
    } else {
      this.loginService.autenticLogin(usuario)
        .subscribe({
          next: (result) => {
            if(result.length != 0){
              let [{ email, grupoSenhas }] = result
  
              if (email == usuario && senha == grupoSenhas.senha) {
                console.log("ok")
                this.msg.showMensage("Acesso válido")
                this.route.navigate(['/home'])
              }else{
                this.msg.showMensage("Login inválido", true)
              }
              
              
            }
            else{
              this.msg.showMensage("Usuário não encontrado", true)
            }
          },
          error: (error) => {
            this.msg.showMensage(error.statusText, true)
          }

        })
    }

    /* this.loginService.getDados().subscribe({
       next: (x) => {
        console.log(x)
       },
       error: (error) => console.log(error)
     })*/
  }
}
