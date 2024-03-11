import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogoProductosComponent } from '../productos.videojuegos/catalogo-productos/catalogo-productos.component';
import { VideoJuego } from '../modelos/video-juegos/apis-jon.interface';


@Injectable({
  providedIn: 'root'
})
export class VideoJuegosService {

  constructor(private http:HttpClient) { }
  obtenerNew_api()
  {
    return this.http.get<VideoJuego[]>('https://run.mocky.io/v3/29e020fe-b583-4609-a8c6-6a183620b196') 
  }
}
