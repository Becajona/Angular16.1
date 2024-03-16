import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoJuego } from '../modelos/video-juegos/apis-jon.interface';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {

  eliminar: any;

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://192.168.1.67:4000/api/v1/productos/get_all';
  
  obtenerNew_api(): Observable<VideoJuego[]> {
    return this.http.get<VideoJuego[]>('http://192.168.1.67:4000/api/v1/productos/get_all')
      .pipe(
        tap(data => console.log('Datos obtenidos del servidor:', data)),
        catchError(err => {
          console.error('Error al obtener los datos del servidor:', err);
          return of([]); // Retorna un array vacío en caso de error
        })
      );
  }
  actualizarProducto(prodId: string, producto: any): Observable<any> {
    const url = `${this.apiUrl}/${prodId}`; // Construir la URL para actualizar el producto
    return this.http.put(url, producto); // Realizar la solicitud HTTP PUT para actualizar el producto
  }


  obtenerProductoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/productos/${id}`; // Suponiendo que la URL para obtener un producto por su ID sea /productos/:id
    return this.http.get<any>(url);
  }
  
  nuevoProducto(miProd: VideoJuego): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('', miProd, { headers })
      .pipe(
        tap((res: any) => {
          if (res.message === "producto insertado") {
            console.log("servicio", res.message);
          }
        }),
        catchError(err => {
          console.error(err.message);
          return of(err);
        })
      );
  }
}
