import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { endpoints } from '../../../configurations/environments';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-produtos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css',
})
export class ConsultaProdutosComponent {
  produtos: any[] = []; //array de objetos
  mensagem: string = ''; //mensagem de texto

  //método construtor
  constructor(private http: HttpClient) {}

  //criando um formulário para capturar a pesquisa de produtos
  form = new FormGroup({
    nome: new FormControl(''), // campo 'nome'
  });

  //função para enviar os dados para a api
  onSubmit() {
    this.http
      .get(`${endpoints.consultar_produtos}/${this.form.value.nome}`)
      .subscribe({
        next: (data) => {
          this.produtos = data as any[];
        },
      });
  }

  // função para enviar uma request de exclusão de produto para a API
  onDelete(id: string) {
    //pedir ao usuário que confirme a operação
    if (confirm('Deseja realmente excluir o produto selecionado?')) {
      this.http
        .delete(`${endpoints.excluir_produto}/${id}`, { responseType: 'text' })
        .subscribe({
          next: (data) => {
            this.mensagem = data;
            this.onSubmit();
          },
        });
    }
  }
}
