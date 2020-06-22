import { Injectable } from '@angular/core';
import { Vendedor } from './Vendedor';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Pedido } from './Pedido';

@Injectable({
    providedIn: 'root'
  })
export class PedidosService {
    pedidos:Array<Pedido> = [];
    pedido: Pedido;

    constructor(private http: HttpClient) { }

    getPedidos(): Observable<Array<Pedido>>
    {
        return this.http.get<Pedido[]>('http://localhost:8000/api/pedidos')
        .pipe(
          tap(pedidos => this.pedidos = pedidos),
          catchError(this.handleError('getPedidos', []))
        );
    }

    getVendedor(id:number)
    {
        return this.http.get<Pedido>('http://localhost:8000/produtos/' + id)
        .pipe(
          tap(pedido => this.pedido = pedido),
          catchError(this.handleError('getProduto', []))
        );
    }

    cadastrarPedido(pedido) {
      return this.http.post('http://localhost:8000/api/pedidos', pedido, {
        headers: {'Content-Type': 'application/json' }
    })
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
      }
}