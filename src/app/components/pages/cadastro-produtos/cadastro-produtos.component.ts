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

@Component({
  selector: 'app-cadastro-produtos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css',
})
export class CadastroProdutosComponent {
  //atributos do componente
  categorias: any[] = []; //array de objetos
  erros: any = null; //objeto
  mensagem: string = ''; // mensagem de sucesso

  // funcao executada ao abrir a pagina
  ngOnInit() {}

  //método construtor (inicializar objetos)
  constructor(private http: HttpClient) {
    // fazendo uma requisição GET para a API
    this.http.get(`${endpoints.consultar_categorias}`).subscribe({
      // capturar a resposta da requisição
      next: (data) => {
        this.categorias = data as any[];
      },
    });
  }

  //objeto para capturar os campos do formulário
  form = new FormGroup({
    nome: new FormControl(''), // campo 'nome'
    preco: new FormControl(''), // campo 'preco'
    quantidade: new FormControl(''), // campo 'quantidade'
    categoriaId: new FormControl(''), // campo 'categoriaId'
  });

  // função executada ao enviar o formulário
  onSubmit() {
    // fazendo a requisição POST para API
    this.http
      .post(`${endpoints.cadastrar_produto}`, this.form.value, {
        responseType: 'text',
      })
      .subscribe({
        //aguardando o retorno da API
        next: (data) => {
          // se a req for bem sucedida
          //limpar o erros
          this.erros = null;

          //capturar a msg de sucesso da api
          this.mensagem = data;

          //zerar os formulário
          this.form.reset();
        },
        error: (e) => {
          // se a requisição falhar
          this.erros = JSON.parse(e.error);
          this.mensagem = '';
        },
      });
  }
}
