import {Component, OnInit} from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
import {Produto} from '../../../services/Produto';
import {ProdutoService} from '../../../services/Produto.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {  
  produtos: Produto[];
  produto : Produto;

  constructor(private produtoService:ProdutoService) {
  }

  ngOnInit() {
    this.getProdutos();
  }

  // Chama o serviço para obtém todos os carros
  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
      console.log(this.produtos);
    });
  }

  loadProduto(id:number)
  {
    this.produto = null;
    this.produtoService.getProduto(id).subscribe((produto: Produto) => {
      this.produto = produto;
      console.log(this.produto);
    })
  }
}
