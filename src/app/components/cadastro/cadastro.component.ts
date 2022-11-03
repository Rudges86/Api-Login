import { ICadastro } from './../../models/interface/Cadastrointerface/ICadastro';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastroService/cadastro.service';
import { MsgService } from 'src/app/services/msgService/msg.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hide !: true



  cadastro: FormGroup = this.fb.group({
    name: ['Rudge', [Validators.required]],
    email: ['rudges86@gmail.com', [Validators.email, Validators.required]],
    grupoSenhas: this.fb.group({
      senha: ['Rudge123@', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,30}$/), Validators.minLength(8)]],
      confirmSenha: ['Rudge123@', [Validators.required]]
    }, { validator: this.confirmSenha })
    //

  })


  //,{validator: this.confirmSenha}

  constructor(private fb: FormBuilder, private msg: MsgService, private route: Router, private cadastroService: CadastroService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.cadastro.valid) {
      this.cadastroService.createUser(this.cadastro.value).subscribe({
        next: () => this.msg.showMensage("Criado", false) ,
        error: (error) => this.msg.showMensage(error.statusText, true)
      })
      this.route.navigate(["login"])
    }
    else {
      this.msg.showMensage("Preencha os dados", true)
      console.log(this.cadastro)
    }
  }

  confirmSenha(form: FormGroup) {
    if (form.get("senha")?.value != form.get('confirmSenha')?.value) {

      return { 'noMatch': true }
    }

    return null

  }

}

