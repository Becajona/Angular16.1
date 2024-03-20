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


  //nuevoProducto
  guardarProducto(producto: any): Observable<any> {
    const url = `${this.apiUrl}/nuevoProd`;
    return this.http.post<any>(url, producto).pipe(
      tap((res: any) => {
        console.log('Producto guardado correctamente');
      }),
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
    // Usa el servicio de proveedores para obtener todos los proveedores
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
