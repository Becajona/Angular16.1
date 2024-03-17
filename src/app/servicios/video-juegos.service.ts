import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {
  private apiUrl = 'http://192.168.1.67:4000/api/v1/productos';

  constructor(private http: HttpClient) { }

  obtenerTodosLosProductos(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  obtenerProductoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url);
  }

  actualizarProducto(prodId: string, producto: any): Observable<any> {
    const url = `${this.apiUrl}/${prodId}`;
    return this.http.put<any>(url, producto);
  }

  new_product(producto: any): Observable<any> {
    // Realizar la lógica para enviar el producto al backend
    return this.http.post<any>('/api/v1/productos/nuevoProd', producto);
  }





  agregarNuevoProducto(nuevoProducto: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    
    return this.http.post<any>('http://192.168.1.67:4000/api/v1/productos/nuevoProd', nuevoProducto, { headers }).pipe(
      tap((res: any) => {
        if (res.message === 'producto insertado') {
          console.log('servicio', res.message);
        }
      }),
      catchError(err => {
        return of(err.error.message);
      })
    );
  }
  


//ACTUALIZAR 
actualizarProductoPorId(id: string, producto: any): Observable<any> {
  const url = `${this.apiUrl}/actualizar/${id}`;
  return this.http.put<any>(url, producto).pipe(
    tap((res: any) => {
      console.log('Producto actualizado correctamente');
    }),
    catchError(err => {
      console.error('Error al actualizar producto:', err);
      return throwError(err);
    })
  );
}

  
//ELIMINAR
  eliminarProducto(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<any>(url).pipe(
      tap((res: any) => {
        console.log('Producto eliminado correctamente');
      }),
      catchError(err => {
        console.error('Error al eliminar producto:', err);
        return throwError(err);
      })
    );
  }
}
