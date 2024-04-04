import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Marca } from '../modelos/video-juegos/marcas.interface';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/marcas';
  constructor(private http:HttpClient) { }

  obtenerTodosLasMarcas(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`; 
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }
  

  //nueva POST
  guardarMarca(marca: any): Observable<any> {
    const url = `${this.apiUrl}/nuevamarca`;
    return this.http.post<any>(url, marca).pipe(
      tap((res: any) => {
        console.log('Marca guardada correctamente');
      }),
      catchError(err => {
        console.error('Error al guardar marca:', err);
        return throwError(err);
      })
    );
  }

  actualizarMarcaPorId(id: string, proveedor: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`;
    return this.http.put<any>(url, proveedor).pipe(
      tap((res: any) => {
        console.log('Proveedor actualizado correctamente');
      }),
      catchError(err => {
        console.error('Error al actualizar proveedor:', err);
        return throwError(err);
      })
    );
  }
  
  obtenerMarcaPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url);
  }
  


  // Método para eliminar una marca por su ID
  eliminarMarca(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`; 
    return this.http.delete(url).pipe(
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
