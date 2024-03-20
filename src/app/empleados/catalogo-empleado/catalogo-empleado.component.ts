import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleado.service'; // Importa tu servicio de empleados
import { Empleados } from 'src/app/modelos/video-juegos/empleados.interface';

@Component({
  selector: 'app-catalogo-empleado',
  templateUrl: './catalogo-empleado.component.html',
  styleUrls: ['./catalogo-empleado.component.css']
})
export class CatalogoEmpleadoComponent implements OnInit {
  listaEmpleados: Empleados[] = []; // Arreglo para almacenar la lista de empleados

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    // Al inicializar el componente, llamamos al método para obtener todos los empleados
    this.obtenerTodosLosEmpleados();
  }

  // Función para obtener todos los empleados
  obtenerTodosLosEmpleados(): void {
    this.empleadoService.obtenerTodosLosEmpleados().subscribe((data: Empleados[]) => {
      console.log(data); // Mostrar los datos obtenidos en la consola (opcional)
      this.listaEmpleados = data; // Asignar los empleados obtenidos al arreglo listaEmpleados
    });
  }
}
