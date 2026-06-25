import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private baseUrl = 'http://192.168.1.72:4000/api/v1/carrito';

  constructor(private http: HttpClient) { }

  getProductosClientes(): Observable<any> {
    const url = `${this.baseUrl}/get_productos_clientes`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  agregarNuevoCarrito(datos: any): Observable<any> {
    const url = `${this.baseUrl}/nuevo_carrito`;

    if (datos.fechaCompra && datos.fechaCompra instanceof Date) {
      datos.fechaCompra = datos.fechaCompra.toISOString();
    }

    return this.http.post<any>(url, datos).pipe(
      catchError(this.handleError)
    );
  }

  getCarritos(): Observable<any> {
    const url = `${this.baseUrl}/get_all`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  actualizarCarrito(id: string, datos: any): Observable<any> {
    const url = `${this.baseUrl}/actualizar/${id}`;

    if (datos.fechaCompra && datos.fechaCompra instanceof Date) {
      datos.fechaCompra = datos.fechaCompra.toISOString();
    }

    return this.http.put<any>(url, datos).pipe(
      catchError(this.handleError)
    );
  }
  getCarritoById(id: string): Observable<any> {
    const url = `${this.baseUrl}/porID/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  eliminarCarrito(id: string): Observable<any> {
    const url = `${this.baseUrl}/eliminar/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }



}
