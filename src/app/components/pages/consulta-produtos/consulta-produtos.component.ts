import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  produtos: any[] = [];

  //método construtor
  constructor(private http: HttpClient) { }


  //criando um formulário para capturar a pesquisa de produtos
  form = new FormGroup({
    nome: new FormControl('') // campo 'nome'
  });


  //função para enviar os dados para a api
  onSubmit() {

    this.http.get('http://localhost:8080/api/produtos/consultar/' + this.form.value.nome).subscribe({
      next: (data) => {
        this.produtos = data as any[];
      }
    })

  }

}
