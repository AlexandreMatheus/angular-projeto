import { Injectable } from '@angular/core';
import { Vendedor } from './Vendedor';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class VendedorService {
    vendedores:Array<Vendedor> = [];
    vendedor: Vendedor;

    constructor(private http: HttpClient) { }

    getVendedores(): Observable<Array<Vendedor>>
    {
        return this.http.get<Vendedor[]>('http://localhost:8000/api/vendedores')
        .pipe(
          tap(vendedores => this.vendedores = vendedores),
          catchError(this.handleError('getVendedores', []))
        );
    }

    getVendedor(id:number)
    {
        return this.http.get<Vendedor>('http://localhost:8000/api/vendedores/' + id)
        .pipe(
          tap(vendedor => this.vendedor = vendedor),
          catchError(this.handleError('getProduto', []))
        );
    }

    cadastrarVendedor(vendedor) {
      return this.http.post('http://localhost:8000/api/vendedores/', vendedor, {
        headers: {'Content-Type': 'application/json' }
    })
    }

    deletarVendedor(id:number) {
      return this.http.delete('http://localhost:8000/api/vendedores/' + id);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          console.error(error);
    
          return of(result as T);
        };
      }
}