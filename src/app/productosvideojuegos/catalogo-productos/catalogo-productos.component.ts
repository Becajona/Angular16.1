import { Component, OnInit } from '@angular/core';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';
import { VideoJuegosService } from '../../servicios/video-juegos.service';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule


@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit{
  listaProductos:VideoJuego[] = []
  constructor(public api:VideoJuegosService){}

  ngOnInit(): void {
    this.api.obtenerNew_api()
    .subscribe((data)=>{
      console.log(data)
      this.listaProductos = data;
    })
  }

}
