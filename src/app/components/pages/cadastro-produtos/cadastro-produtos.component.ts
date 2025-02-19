import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css',
})
export class CadastroProdutosComponent {
  //atributos do componente
  categorias: any[] = []; //array de objetos

  // funcao executada ao abrir a pagina
  ngOnInit() { }

  //método construtor (inicializar objetos)
  constructor(private http: HttpClient) {
    // fazendo uma requisição GET para a API
    this.http.get('http://localhost:8080/api/categorias/consultar').subscribe({
      // capturar a resposta da requisição
      next: (data) => {
        this.categorias = data as any[];
      }
    });
  }

  //objeto para capturar os campos do formulário
  form = new FormGroup({
    nome: new FormControl(''), // campo 'nome'
    preco: new FormControl(''), // campo 'preco'
    quantidade: new FormControl(''), // campo 'quantidade'
    categoriaId: new FormControl('') // campo 'categoriaId'
  });

  // função executada ao enviar o formulário
  onSubmit() {

    // fazendo a requisição POST para API
    this.http.post('http://localhost:8080/api/produtos/cadastrar', this.form.value,
      { responseType: 'text' }
    ).subscribe({ //aguardando o retorno da API
      next: (data) => { // se a req for bem sucedida
        console.log(data);
      },
      error: (e) => { // se a requisição falhar
        console.log(e.error);
      }
    });

  }

}
