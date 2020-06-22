import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ListaTiposComponent } from './lista-tipos/lista-tipos.component';

@NgModule({
  declarations: [PagesComponent, DashBoardComponent, ListaVendedoresComponent, ListaPedidosComponent, ListaTiposComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
