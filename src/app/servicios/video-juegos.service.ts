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