import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/productos';

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


  //nuevoProducto
  guardarProducto(producto: any): Observable<any> {
    const url = `${this.apiUrl}/nuevoProd`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, producto, { headers }).pipe(
      tap(() => console.log('Producto guardado correctamente')),
      catchError(err => {
        console.error('Error al guardar producto:', err);
        return throwError(err);
      })
    );
  }


  obtenerProductoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url);
  }

  
  
  //proveedores Id

  obtenerTodosLosProveedores(): Observable<any[]> {
    
    const proveedoresUrl = 'http://192.168.1.67:4000/api/v1/proveedores/get_all';
    return this.http.get<any[]>(proveedoresUrl).pipe(
      tap(data => console.log('Proveedores obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los proveedores del servidor:', err);
        return throwError(err);
      })
    );
  }

///////////////////////////////////////////////



//ACTUALIZAR 
actualizarProducto(id: string, producto: any): Observable<any> {
  const url = `${this.apiUrl}/actualizar/${id}`;
  return this.http.put(url, producto, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar producto:', error);
        return throwError('Error al actualizar producto. Por favor, inténtalo de nuevo.');
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
