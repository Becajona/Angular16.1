import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogoProveedorComponent } from '../proveedores/catalogo-proveedor/catalogo-proveedor.component';
import { Proveedores } from '../modelos/video-juegos/proveedores.interface';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { }
  obtenerNew_api()
  {
    return this.http.get<Proveedores[]>('https://run.mocky.io/v3/2be0ccf2-b8ce-4ec9-8d5c-63aed8ab6344') 
  }
}
