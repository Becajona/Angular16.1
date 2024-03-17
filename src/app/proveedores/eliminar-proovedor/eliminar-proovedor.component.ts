import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-eliminar-proovedor',
  templateUrl: './eliminar-proovedor.component.html',
  styleUrls: ['./eliminar-proovedor.component.css']
})
export class EliminarProovedorComponent implements OnInit {
  provId: string | null = null;
  messageErr: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioProv: ProveedoresService
  ) {}

  ngOnInit(): void {
    this.provId = this.route.snapshot.paramMap.get('id');
    console.log(this.provId);
  }

  eliminarProveedor(id: string | null) {
    if (id) {
      this.servicioProv.eliminarProveedor(id).subscribe(
        () => {
          console.log('Proveedor eliminado correctamente');
          // Realizar cualquier otra acción después de eliminar el proveedor
        },
        error => {
          console.error('Error al eliminar el proveedor:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del proveedor es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
      this.eliminarProveedor(id);
    }
  }
}
