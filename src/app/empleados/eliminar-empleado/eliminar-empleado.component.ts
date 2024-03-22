import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent {
  empleadoId: string | null = null;
  errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.empleadoId = this.route.snapshot.paramMap.get('id');
    console.log(this.empleadoId);
  }

  eliminarEmpleado(id: string | null) {
    if (id) {
      this.empleadoService.eliminarEmpleado(id).subscribe(
        () => {
          console.log('Empleado eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar el empleado:', error);
          this.errorMessage = error;
        }
      );
    } else {
      console.error('El ID del empleado es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.eliminarEmpleado(id);
    }
  }
}
