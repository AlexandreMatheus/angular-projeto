import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ListaTiposComponent } from './lista-tipos/lista-tipos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'vendedores', component: ListaVendedoresComponent},
      {path: 'tipos', component: ListaTiposComponent},
      {path: 'pedidos', component: ListaPedidosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
