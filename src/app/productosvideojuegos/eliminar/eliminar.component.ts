import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  prodId: string | null = null;
  messageErr: any;
  res: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioProd: VideoJuegosService) {}

  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id');
    console.log(this.prodId);
  }

  eliminarProducto(id: string | null) {
    if (id) {
      this.servicioProd.eliminarProducto(id).subscribe(
        () => {
          console.log('Producto eliminado correctamente');
          // Realizar cualquier otra acción después de eliminar el producto
        },
        error => {
          console.error('Error al eliminar el producto:', error);
          this.messageErr = error;
        }
      );
    } else {
      console.error('El ID del producto es nulo.');
    }
  }
  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.eliminarProducto(id);
    }
  }
}
