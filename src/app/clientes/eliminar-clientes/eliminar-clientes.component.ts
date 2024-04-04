import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-eliminar-clientes',
  templateUrl: './eliminar-clientes.component.html',
  styleUrls: ['./eliminar-clientes.component.css']
})
export class EliminarClientesComponent implements OnInit {
  clienteId: string | null = null;
  messageErr: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    console.log(this.clienteId);
  }

  eliminarCliente(id: string | null) {
    if (id) {
      this.clientesService.eliminarCliente(id).subscribe(
        () => {
          console.log('Cliente eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar el cliente:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del cliente es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.eliminarCliente(id);
    }
  }
}
