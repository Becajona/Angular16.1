import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/modelos/video-juegos/marcas.interface';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-catalogo-marcas',
  templateUrl: './catalogo-marcas.component.html',
  styleUrls: ['./catalogo-marcas.component.css']
})
export class CatalogoMarcasComponent implements OnInit {
  listaMarcas: Marca[] = [];

  constructor(public api: MarcasService) { }

  ngOnInit(): void {
    this.api.obtenerTodosLasMarcas().subscribe((data: Marca[]) => {
        console.log(data);
        this.listaMarcas = data;
      });
  }

}
