import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VideoJuego } from '../modelos/video-juegos/apis-jon.interface';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://192.168.1.67:4000/api/v1/productos';

  obtenerTodosLosProductos(): Observable<VideoJuego[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<VideoJuego[]>(url).pipe(
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
  agregarNuevoProducto(nuevoProducto: VideoJuego): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const url = `${this.apiUrl}/nuevoProd`;
    return this.http.post<any>(url, nuevoProducto, { headers }).pipe(
      tap((res: any) => {
        if (res.message === 'producto insertado') {
          console.log('Producto insertado correctamente');
        }
      }),
      catchError(err => {
        console.error('Error al agregar nuevo producto:', err);
        return throwError(err);
      })
    );
  }
}
