import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentosService } from 'src/app/servicios/departamentos.service';

@Component({
  selector: 'app-eliminar-departamentos',
  templateUrl: './eliminar-departamentos.component.html',
  styleUrls: ['./eliminar-departamentos.component.css']
})
export class EliminarDepartamentoComponent implements OnInit {
  departamentoId: string | null = null;
  messageErr: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private departamentoService: DepartamentosService
  ) { }
  
  ngOnInit(): void {
    this.departamentoId = this.route.snapshot.paramMap.get('id');
    console.log(this.departamentoId);
  }

  eliminarDepartamento(id: string | null) {
    if (id) {
      this.departamentoService.eliminarDepartamento(id).subscribe(
        () => {
          console.log('Departamento eliminado correctamente');
          // Realizar cualquier otra acción después de eliminar el departamento
        },
        error => {
          console.error('Error al eliminar el departamento:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del departamento es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este departamento?')) {
      this.eliminarDepartamento(id);
    }
  }
}