import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogoMarcasComponent } from '../marcas/catalogo-marcas/catalogo-marcas.component';
import { Marca } from '../modelos/video-juegos/marcas.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http:HttpClient) { }
  obtenerNew_api()
  {
    return this.http.get<Marca[]>('https://run.mocky.io/v3/08def0c7-8b20-4d71-bf16-60caadb0a475') 
  }
}
