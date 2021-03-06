import { Injectable } from '@angular/core';
import { Produto } from './Produto';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ProdutoService {

    produtos:Array<Produto> = [];
    produto: Produto;

    constructor(private http: HttpClient) { }

    getProdutos(): Observable<Array<Produto>>
    {
        return this.http.get<Produto[]>('http://localhost:8000/api/produtos')
        .pipe(
          tap(produtos => this.produtos = produtos),
          catchError(this.handleError('getProdutos', []))
        );
    }

    getProduto(id:number)
    {
        return this.http.get<Produto>('http://localhost:8000/api/produtos/' + id)
        .pipe(
          tap(produto => this.produto = produto),
          catchError(this.handleError('getProduto', []))
        );
    }

    cadastrarProduto(produto) {
      console.log(produto);
      return this.http.post('http://localhost:8000/api/produtos', produto, {
        headers: {'Content-Type': 'application/json' }
      });
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
      }
}