import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { endpoints } from '../../../configurations/environments';

@Component({
  selector: 'app-autenticar-usuario',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css',
})
export class AutenticarUsuarioComponent {
  mensagem: string = '';
  erros: any = null;

  //CONSTRUCTOR INIT FOR HTTP CLIENT
  constructor(private http: HttpClient) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  //FUNÇÃO PARA CAPTURAR O EVENTO SUBMIT DO FORMULÁRIO
  onSubmit() {
    this.mensagem = '';
    this.erros = null;

    this.http.post(endpoints.autenticar_usuario, this.form.value).subscribe({
      next: (data: any) => {
        //GRAVAR OS DADOS DO USUÁRIO AUTENTICADO NA SESSÃO DO NAVEGADOR
        sessionStorage.setItem('usuario', JSON.stringify(data));
        //REDIRECIONAR PARA A PÁGINA DO DASHBOARD
        location.href = '/pages/dashboard';
      },
      error: (e: any) => {
        typeof e.error === 'string'
          ? (this.mensagem = e.error)
          : (this.erros = e.error);
      },
    });
  }
}
