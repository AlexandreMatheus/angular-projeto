import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/services/Pedido';
import { PedidosService } from 'src/app/services/Pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})

export class ListaPedidosComponent implements OnInit {
  pedidos:Array<Pedido> = [];
  pedido: Pedido;

  constructor(private pedidoService: PedidosService, private router: Router) { }

  ngOnInit() {
    this.pedidoService.getPedidos().toPromise().then(
      result =>
      {
         this.pedidos = result;
      }
    );
  }

}
