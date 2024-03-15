import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogoMarcasComponent } from '../marcas/catalogo-marcas/catalogo-marcas.component';
import { Marca } from '../modelos/video-juegos/marcas.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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


@Injectable({
  providedIn: 'root'
})
export class MarcasServices {

  constructor(private http: HttpClient) { }

  // Método para eliminar una marca por su ID
  eliminar(id: string): Observable<any> {
    const url = `URL_DE_TU_API_PARA_ELIMINAR_MARCA/${id}`; // Reemplaza URL_DE_TU_API_PARA_ELIMINAR_MARCA con la URL de tu API
    return this.http.delete(url).pipe(
      catchError(error => {
        throw error; // Manejo de errores
      })
    );
  }
}
