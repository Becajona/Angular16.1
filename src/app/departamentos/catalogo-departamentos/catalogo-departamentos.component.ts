import { Component, OnInit } from '@angular/core'; 
import { DepartamentosService } from 'src/app/servicios/departamentos.service'; // Asegúrate de importar el servicio correcto para los departamentos
import { Departamento } from 'src/app/modelos/video-juegos/departamentos.interface';

@Component({
  selector: 'app-catalogo-departamentos',
  templateUrl: './catalogo-departamentos.component.html',
  styleUrls: ['./catalogo-departamentos.component.css']
})
export class CatalogoDepartamentosComponent implements OnInit {
  listaDepartamentos: Departamento[] = [];

  constructor(public api: DepartamentosService) { }

  ngOnInit(): void {
    this.api.obtenerTodosLosDepartamentos().subscribe((data: Departamento[]) => {
      console.log(data);
      this.listaDepartamentos = data;
    });
  }
}
