import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedores } from '../modelos/video-juegos/proveedores.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  obtenerNew_api() {
    return this.http.get<Proveedores[]>('http://192.168.1.67:4000/api/v1/proveedores/get_all');
  }

  
  obtenerPorId_api(id: number): Observable<Proveedores> {
    const url = `URL_DEL_ENDPOINT/${id}`; // Reemplaza URL_DEL_ENDPOINT por la URL real del endpoint para obtener un proveedor por su ID
    return this.http.get<Proveedores>(url);
  }
}
