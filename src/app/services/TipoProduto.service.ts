import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { TipoProduto } from './TipoProduto';

@Injectable({
    providedIn: 'root'
  })
export class TipoProdutoService {
    tipoProdutos:Array<TipoProduto> = [];
    tipoProduto: TipoProduto;

    constructor(private http: HttpClient) { }

    getTipos(): Observable<Array<TipoProduto>>
    {
        return this.http.get<TipoProduto[]>('http://localhost:8000/api/tipoproduto')
        .pipe(
          tap(tiposProdutos => this.tipoProdutos = tiposProdutos),
          catchError(this.handleError('getVendedores', []))
        );
    }

    getTipo(id:number)
    {
        return this.http.get<TipoProduto>('http://localhost:8000/api/tipoproduto/' + id)
        .pipe(
          tap(tipoProduto => this.tipoProduto = tipoProduto),
          catchError(this.handleError('getProduto', []))
        );
    }

    cadastrarTipo(tipoProduto) {
      return this.http.post('http://localhost:8000/api/tipoproduto', tipoProduto, {
        headers: {'Content-Type': 'application/json' }
    })
    }

    deletarTipo(id:number) {
      return this.http.delete('http://localhost:8000/api/tipoproduto/' + id);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
      }
}