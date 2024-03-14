import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/modelos/video-juegos/proveedores.interface';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-catalogo-proveedor',
  templateUrl: './catalogo-proveedor.component.html',
  styleUrls: ['./catalogo-proveedor.component.css']
})
export class CatalogoProveedorComponent implements OnInit{
  listaProveedor:Proveedores[] = []
  constructor(public api:ProveedoresService){}

  ngOnInit(): void {
    this.api.obtenerNew_api()
    .subscribe((data)=>{
      console.log(data)
      this.listaProveedor = data;
    })
  }

}
