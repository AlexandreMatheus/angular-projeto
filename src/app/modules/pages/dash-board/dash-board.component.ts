import {Component, OnInit} from '@angular/core';
import {OrderListModule} from 'primeng/orderlist';
import {Produto} from '../../../services/Produto';
import {ProdutoService} from '../../../services/Produto.service';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { Router } from '@angular/router';
import { Vendedor } from 'src/app/services/Vendedor';
import { TipoProduto } from 'src/app/services/TipoProduto';
import { VendedorService } from 'src/app/services/Vendedor.service';
import { TipoProdutoService } from 'src/app/services/TipoProduto.service';
import { PedidosService } from 'src/app/services/Pedidos.service';
import { Pedido } from 'src/app/services/Pedido';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {  
  produtos: Produto[];
  produto : Produto;
  user;
  userAdmin = false;
  
  credentialsProduto = {  
    nome_produto: '',
    valor_produto: null,
    descricao: '',
    imagem_produto: '',
    vendedor: null,
    peso_produto: null,
    tipo_produto: null
  }

  vendedores: Vendedor[];

  tiposProdutos: TipoProduto[];


  constructor(
    private produtoService:ProdutoService,
    private auth: AuthenticationService,
    private router: Router,
    private vendedorService:VendedorService,
    private tipoProdutoService: TipoProdutoService,
    private pedidoService: PedidosService
  ) {
    if (auth.isLoggedIn()) {
      this.auth.profile().toPromise().then(
        result =>
        {
           this.user = result;
           this.user.user.admin === 1 ? this.userAdmin = true : this.userAdmin = false;

           if (this.userAdmin) {
            this.vendedorService.getVendedores().toPromise().then(
              result =>
              {
                 this.vendedores = result;
              }
            );

            this.tipoProdutoService.getTipos().toPromise().then(
              result =>
              {
                 this.tiposProdutos = result;
              }
            );
          }
        }
      );
    }
  }

  ngOnInit() {
    this.getProdutos();
  }

  // Chama o serviço para obtém todos os carros
  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }

  loadProduto(id:number)
  {
    this.produto = null;
    this.produtoService.getProduto(id).subscribe((produto: Produto) => {
      this.produto = produto;
    })
  }

  redirect()
  {
    location.reload();
    this.router.navigateByUrl('/login/');
  }

  cadastrarProduto()
  {
    this.produtoService.cadastrarProduto(this.credentialsProduto).subscribe(
       () => {
         this.router.navigateByUrl('/');
       },
       err => {
        console.log(err);
       }
     )
  }

  cadastrarPedido()
  {
    if (this.auth.isLoggedIn()) {
      let pedido : Pedido;
      console.log({id_comprador: this.user.user.id});
     
      this.pedidoService.cadastrarPedido(
        {
          id_comprador : this.user.user.id,
          id_produto   : this.produto.id,
          id_vendedor  : this.produto.vendedor.id,
          nome_produto : this.produto.nome_produto,
          valor_compra : this.produto.valor_produto,
        }
      ).subscribe(
        () => {
          this.router.navigateByUrl('/produtos/pedidos');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
