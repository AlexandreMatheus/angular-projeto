import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../../services/Vendedor';
import { VendedorService } from 'src/app/services/Vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.scss']
})
export class ListaVendedoresComponent implements OnInit {
  credentialsVendedor = {
    nome_vendedor: '',
    imagem_logo: '',
    endereco: ''
  }

  vendedor: Vendedor;
  vendedores: Vendedor[];

  constructor(private vendedoresService: VendedorService, private router: Router) { }

  ngOnInit() {
    this.vendedoresService.getVendedores().toPromise().then(result =>{ this.vendedores = result;});
  }

  cadastrarVendedor()
  {
    this.vendedoresService.cadastrarVendedor(this.credentialsVendedor).subscribe(
      () => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

  loadVendedor(id:number)
  {
    this.vendedor = null;
    this.vendedoresService.getVendedor(id).subscribe((vendedor: Vendedor) => {
      this.vendedor = vendedor;
    })
  }

  deletarVendedor(id:number)
  {
    this.vendedoresService.deletarVendedor(id).subscribe(
      () => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }
}
