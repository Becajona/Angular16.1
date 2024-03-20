import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.css']
})
export class EliminarMarcaComponent implements OnInit {
  marcaId: string | null = null;
  messageErr: any;
marca: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMarca: MarcasService
  ) { }
  
  ngOnInit(): void {
    this.marcaId = this.route.snapshot.paramMap.get('id');
    console.log(this.marcaId);
  }

  eliminarMarca(id: string | null) {
    if (id) {
      this.servicioMarca.eliminarMarca(id).subscribe(
        () => {
          console.log('Marca eliminada correctamente');
          // Realizar cualquier otra acción después de eliminar la marca
        },
        error => {
          console.error('Error al eliminar la marca:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID de la marca es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta marca?')) {
      this.eliminarMarca(id);
    }
  }
}
