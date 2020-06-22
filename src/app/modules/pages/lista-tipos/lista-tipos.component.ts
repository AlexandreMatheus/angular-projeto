import { Component, OnInit } from '@angular/core';
import {TipoProdutoService} from '../../../services/TipoProduto.service';
import { TipoProduto } from 'src/app/services/TipoProduto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-tipos',
  templateUrl: './lista-tipos.component.html',
  styleUrls: ['./lista-tipos.component.scss']
})
export class ListaTiposComponent implements OnInit {
  tiposProdutos:Array<TipoProduto> = [];
  tipoProduto: TipoProduto;
  credentialsTipo = {
    nome_tipo: ''
  }

  constructor(private tipoProdutoService: TipoProdutoService, private router: Router) {
   }

  ngOnInit() {
    this.tipoProdutoService.getTipos().toPromise().then(
      result =>
      {
         this.tiposProdutos = result;
      }
    );
  }

  cadastrarTipo()
  {
    this.tipoProdutoService.cadastrarTipo(this.credentialsTipo).subscribe(
      () => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

  loadTipo(id:number)
  {
    this.tipoProduto = null;
    this.tipoProdutoService.getTipo(id).subscribe((tipoProduto: TipoProduto) => {
      this.tipoProduto = tipoProduto;
    })
  }

  deletarTipo(id:number)
  {
    this.tipoProdutoService.deletarTipo(id).subscribe(
      () => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }
}
