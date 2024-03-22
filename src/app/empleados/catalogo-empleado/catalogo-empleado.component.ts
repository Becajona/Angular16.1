import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { Empleados } from 'src/app/modelos/video-juegos/empleados.interface';

@Component({
  selector: 'app-catalogo-empleado',
  templateUrl: './catalogo-empleado.component.html',
  styleUrls: ['./catalogo-empleado.component.css']
})
export class CatalogoEmpleadoComponent implements OnInit {
  listaEmpleados: Empleados[] = []; 

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.obtenerTodosLosEmpleados().subscribe(data => {
      console.log(data);
      this.listaEmpleados = data;
    });
  }
}
