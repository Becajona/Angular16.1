import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/cliente';

  constructor(private http: HttpClient) { }

  obtenerTodosLosClientes(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  guardarCliente(cliente: any): Observable<any> {
    const url = `${this.apiUrl}/nuevocliente`;
    return this.http.post<any>(url, cliente).pipe(
      tap((res: any) => {
        console.log('Cliente guardado correctamente');
      }),
      catchError(err => {
        console.error('Error al guardar cliente:', err);
        return throwError(err);
      })
    );
  }

  actualizarClientePorId(id: string, cliente: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`;
    return this.http.put<any>(url, cliente).pipe(
      tap((res: any) => {
        console.log('Cliente actualizado correctamente');
      }),
      catchError(err => {
        console.error('Error al actualizar cliente:', err);
        return throwError(err);
      })
    );
  }

  obtenerClientePorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url);
  }

  eliminarCliente(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`; 
    return this.http.delete(url).pipe(
      tap((res: any) => {
        console.log('Cliente eliminado correctamente');
      }),
      catchError(err => {
        console.error('Error al eliminar cliente:', err);
        return throwError(err);
      })
    );
  }
}
