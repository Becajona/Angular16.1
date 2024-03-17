import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Proveedores } from '../modelos/video-juegos/proveedores.interface';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private apiUrl = 'http://192.168.1.67:4000/api/v1/proveedores';
  constructor(private http: HttpClient) { }

  obtenerTodosLosProveedores(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`; 
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  //Nuevoproveedor
  guardarProveedor(proveedor: any): Observable<any> {
    const url = `${this.apiUrl}/nuevoprove`; // Reemplaza '/nuevoprove' con la ruta adecuada en tu API
    return this.http.post<any>(url, proveedor).pipe(
      tap((res: any) => {
        console.log('Proveedor guardado correctamente');
      }),
      catchError(err => {
        console.error('Error al guardar proveedor:', err);
        return throwError(err);
      })
    );
  }


  eliminarProveedor(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`; // Cambia 'eliminar' por la ruta adecuada en tu API
    return this.http.delete<any>(url).pipe(
      tap((res: any) => {
        console.log('Proveedor eliminado correctamente');
      }),
      catchError(err => {
        console.error('Error al eliminar proveedor:', err);
        return throwError(err);
      })
    );
  }


}
