import { Component } from '@angular/core'

import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component'
import { Produto } from './produto'


@Component({
  selector: 'myApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = []
  title = 'AngularTest'

  constructor(){
    let produto = new Produto()
    produto.id = 1
    produto.nome = 'Macarrão'
    this.produtos.push(produto)
  }
}
