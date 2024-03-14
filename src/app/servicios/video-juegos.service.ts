import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatalogoProductosComponent } from '../productos.videojuegos/catalogo-productos/catalogo-productos.component';
import { VideoJuego } from '../modelos/video-juegos/apis-jon.interface';

import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {
  eliminar: any;

  constructor(private http:HttpClient) { }
  obtenerNew_api()
  {
    return this.http.get<VideoJuego[]>('https://run.mocky.io/v3/56bd50df-e5a5-47f5-8204-31a7a094bb1a')
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  nuevoProducto(miProd: VideoJuego): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>('http://127.0.0.1:4000/productos/nuevoProd', miProd, { headers })
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

//actualizarProducto(id: string, producto: any): Observable<any> {
//  const url = `${this.apiUrl}/productos/actualizar/${id}`;
//  return this.http.put(url, producto);
//}
//}

//eliminar_prod(id:string | null){
//  const apiUrl='http://127.0.0.1:4000'
//  const url = `${apiUrl}/productos/eliminar/${id}`;
//  return this.http.delete<any>(url)
//  }
